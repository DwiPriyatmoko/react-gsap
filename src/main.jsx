import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import * as Sentry from '@sentry/react';

Sentry.init({
	dsn: 'https://f7fa696bccb507d2b55e3fba75732493@o4508313094848512.ingest.de.sentry.io/4508313097928784',
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
