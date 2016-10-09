import Data.List
import System.IO


fibonacci n
    | n == 0  = 0
    | n == 1  = 1
    | n > 1  = fibonacci (n-1) + fibonacci (n-2)

addDouble x y z = 2 * (x + y + z)
multiply x y = x * y



multiply x y = x * y
choiceTest x y = if x == 2 then x else y


size :: Int
size = 12 + 13

-- The function to square an integer.
square :: Int -> Int
square n = n*n

-- The function to double an integer.
double :: Int -> Int
double n = 2*n
-- An example using double, square and size.
example :: Int
example = double (size - square (2+2))

len [] = 0
len (h:t) = 1 + len t --function for defining length in haskell


-- main = do print([1,2,3] ++ [4,5])
main = do print(filter(<= 3) [1,2,3,4,5])

--addDouble 5 5 5 * multiply 5 9
--[1,2,3] ++ [4,5] --array/list concatenation