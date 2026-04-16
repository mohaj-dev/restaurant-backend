import { exec } from "child_process";

export default {
  async bootstrap() {
    console.log("🔥 Importing data...");

    exec("npx strapi import -f export_20260416033338.tar --force", (err, stdout, stderr) => {
      if (err) {
        console.error("Import error:", err);
        return;
      }
      console.log(stdout);
      console.error(stderr);
    });
  },
};
