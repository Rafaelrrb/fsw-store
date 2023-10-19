import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/categoryIcon";
import { Category } from "@prisma/client";


interface CategoryItemProps{
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  return ( 
    <Badge variant="outline" className="py-3 flex items-center justify-center gap-2 rounded-lg">
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <samp className="text-xs font-bold">{category.name}</samp>
    </Badge>
   );
}
 
export default CategoryItem;