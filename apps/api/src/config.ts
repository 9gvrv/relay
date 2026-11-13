import z from "zod";

const envSchema = z.object({
	APP_NAME: z.string(),
	APP_VERSION: z.string(),
	PORT: z.coerce.number().min(1000),
	ENV: z
		.union([
			z.literal("development"),
			z.literal("testing"),
			z.literal("production"),
		])
		.default("development"),
});

const env = envSchema.safeParse(Bun.env);

const settings = {
	app_name: env.data?.APP_NAME,
	app_version: env.data?.APP_VERSION,
	port: env.data?.PORT,
	env: env.data?.ENV,
};

export default settings;
