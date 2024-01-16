npm install && npm start

#### output

```
> ast-grep-test@1.0.0 start
> ts-node-dev --files --no-notify --respawn --project tsconfig.json src/main.ts

[INFO] 14:11:16 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.3.3)
Filename: .../files/test.tsx
import { Foo } from "@some/test-lib";

Filename: .../files/test.tsx
import { FooBar } from "@some/test-lib-lol";
```
