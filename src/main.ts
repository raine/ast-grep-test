import {
  NapiConfig,
  FindConfig,
  FrontEndLanguage,
  SgNode,
} from "@ast-grep/napi";
import { tsx } from "@ast-grep/napi";
import * as path from "path";

async function main() {
  const config: FindConfig = {
    paths: [path.join(__dirname, "..", "files")],
    matcher: {
      rule: {
        all: [
          {
            kind: "import_statement",
            has: {
              field: "source",
              regex: "@some/test-lib",
              // This makes the rule not return anything, why?
              // regex: "^@some/test-lib$",
            },
          },
          {
            has: {
              stopBy: "end",
              kind: "identifier",
              regex: "Foo",
              // This makes the rule not return anything, why?
              // regex: "^Foo$",
            },
          },
        ],
      },
      language: FrontEndLanguage.Tsx,
    },
  };

  await tsx.findInFiles(config, (err, result) => {
    if (err !== null) {
      console.error(err);
      return;
    }

    result.forEach((node) => {
      console.log("Filename:", node.getRoot().filename());
      console.log(node.text());
      console.log();
    });
  });

  console.log("Done!");
}

main().catch(console.error);
