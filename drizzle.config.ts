import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: 'mysql://0goj4636t8o35h2f43g3:pscale_pw_Sep0yyKJGKtUEu4yJoDLWvlR5MMZIdYEQ0ppide1qjX@aws.connect.psdb.cloud/nomade?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;
