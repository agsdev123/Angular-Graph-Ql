import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular";
import { BrowserTracing } from "@sentry/tracing";

// import { AppModule } from "./app/app.module";

Sentry.init({
  // dsn: "https://aac57c91e7fb4645b9a667636c78d6cb@o1301551.ingest.sentry.io/4503997009952768",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(null)
  .then((success) => console.log(`Bootstrap success`))
  .catch((err) => console.error(err));
