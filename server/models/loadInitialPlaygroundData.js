import initialData from "../_initial_data/playground.json" assert { type: "json" };
import { createPlayground } from "../controllers/playgroundController.js";

const loadInitalData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const playground = initialData[i];
    try {
      console.log(`creating playground ${playground.name}`);
      const newPlayground = await createPlayground(playground);
      console.log("newPlayground", newPlayground);
      console.log(
        `created playground ${newPlayground.name} with id ${newPlayground._id}`
      );
    } catch (err) {
      console.log(`error creating playground ${playground.name}`);
      console.log(err.message);
    }
  }
  console.log("finished loading initial data");
};
loadInitalData();