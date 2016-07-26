import Datasheet from "./src/datasheet/main";
import { numToAlphabet } from "./src/utils/utils";

const datasheet = new Datasheet({
  container: document.body,
  rowCount: 54,
  colCount: 100,
});
