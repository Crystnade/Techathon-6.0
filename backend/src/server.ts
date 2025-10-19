import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import multer from 'multer';

dotenv.config();

const app = express();

const PORT = parseInt(process.env.PORT || '4000', 10);
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads';
const MAX_FILE_SIZE_MB = parseInt(process.env.MAX_FILE_SIZE_MB || '25', 10);

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

app.use(cors({ origin: CORS_ORIGIN === '*' ? true : CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Static serving for uploaded files
app.use('/uploads', express.static(path.resolve(UPLOAD_DIR)));

// Multer storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE_MB * 1024 * 1024 },
});

// File upload endpoint
app.post('/api/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const fileUrlPath = `/uploads/${req.file.filename}`;
  res.json({
    filename: req.file.originalname,
    storedAs: req.file.filename,
    mimetype: req.file.mimetype,
    size: req.file.size,
    url: fileUrlPath,
  });
});

// Example endpoints that frontend buttons might call
app.get('/api/action/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.json({ ok: true, action: name });
});

app.post('/api/submit', (req: Request, res: Response) => {
  const payload = req.body;
  const filePath = path.join('data', 'forms', `${Date.now()}.json`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
  res.json({ ok: true });
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
