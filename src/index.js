import React from 'react';
import { createRoot } from 'react-dom/client';

import SimpleReactLightbox from 'simple-react-lightbox';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
	<SimpleReactLightbox>
		<App />
	</SimpleReactLightbox>,
);
