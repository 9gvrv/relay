import { Hono } from "hono";
import settings from "./config";

const app = new Hono();

app.get("/", async (c) => {
	return c.json({
		app_name: settings.app_name,
		app_version: settings.app_version,
	});
});

export default {
	port: settings.port,
	fetch: app.fetch,
};
