import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    uri: 'mysql://9z4j4er7rsamyb3cfjma:pscale_pw_SMvhgRdDwhzenWYaEpJvG1I9eC1DA55IYXeY0ky5ND6@aws.connect.psdb.cloud/nomade?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;
