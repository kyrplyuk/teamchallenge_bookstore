#!/bin/sh
npm run build
npm run db:migrate
npm run start:prod