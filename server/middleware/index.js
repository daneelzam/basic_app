import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import dotenv from 'dotenv';
import cookiesCleaner from './auth.js';
import dbConnect from './dbConnect.js';

const __dirname = path.resolve();
const FileStore = sessionFileStore(session);

const config = (app) => {
  dotenv.config();

  dbConnect();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(cookieParser());

  app.use(
    session({
      store: new FileStore(),
      name: 'user_sid',
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        expires: 86400000,
        httpOnly: true,
      },
    }),
  );

  app.use(cookiesCleaner);
};

export default config;
