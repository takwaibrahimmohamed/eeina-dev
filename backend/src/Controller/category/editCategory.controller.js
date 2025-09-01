import Categories from "../../models/categories/Categories.model.js";
import HealthLabels from "../../models/healthLabels/healthLabels.model.js";
import DietLabels from "../../models/dietLabels/dietLabels.model.js";
import Cuisine from "../../models/cuisine/cuisine.model.js";

import { apiErrorHandler } from "../../Utils/apiErrorHandler.js";
import { asyncHandler } from "../../Utils/asyncHandler.js";
import { apiResponse } from "../../Utils/apiResponseHandler.js";

export const editCategory = asyncHandler(async (req, res, next) => {
      const { id, type } = req.params;
      const image = req.body.image;

      let category = null;
      switch (type) {
            case "meal-type":
                  category = await Categories.findById(id);
                  break;
            case "health-label":
                  category = await HealthLabels.findById(id);
                  break;
            case "diet-label":
                  category = await DietLabels.findById(id);
                  break;
            case "cuisine":
                  category = await Cuisine.findById(id);
                  break;
            default:
                  return next(new apiErrorHandler(400, "Invalid category type"));
      }

      if (!category)
            return next(new apiErrorHandler(404, "Category not found"));

      if (!image) return next(new apiErrorHandler(400, "Image is required"));



      category.image = image;
      await category.save();

      return res
            .status(200)
            .json(
                  new apiResponse(
                        200,
                        category,
                        "Category updated successfully"
                  )
            );
});
