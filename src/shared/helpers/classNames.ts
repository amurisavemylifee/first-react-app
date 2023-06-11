type classNamesProps = string | Record<string, boolean>;

export function classNames(...classes: classNamesProps[]): string {
  let result: Array<string> = [];

  classes.forEach((classNode) => {
    if (typeof classNode === "string") {
      result.push(classNode);
    } else {
      Object.entries(classNode).forEach((classNodeObj) => {
        if (classNodeObj[1]) {
          result.push(classNodeObj[0]);
        }
      });
    }
  });

  return result.join(" ");
}
