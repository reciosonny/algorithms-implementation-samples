-- quicksort arr = if len arr < 2 then arr else quicksort ()

quicksort [] = []
quicksort (p:xs) = (quicksort lesser) ++ [p] ++ (quicksort greater)
    where
        lesser = filter (< p) xs
        greater = filter (>= p) xs

quicksortMid [] = []
quicksortMid (p:xs) = (quicksortMid lesser) ++ [p] ++ (quicksortMid greater) --TODO: formula for revision. Should get middle element as pivot not first element
    where
        lesser = filter (< p) xs
        greater = filter (>= p) xs

testArr = [1,2,3,4]
main = do print(quicksortMid [4,3,2,1])