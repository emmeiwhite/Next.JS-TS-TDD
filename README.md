### Zod

```ts
// ✅ Step 1: Install zod
import { z } from 'zod'

// ✅ Step 2: Define a Zod Schema for Tour
const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string()
})

// ✅ Step 3: Infer  TS type
type Tour = z.infer<typeof TourSchema>
```
