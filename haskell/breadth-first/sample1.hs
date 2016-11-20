traverseBF :: Tree a -> [a]
traverseBF tree = tbf [tree]
    where
        tbf [] = []
        tbf xs = map nodeValue xs ++ tbf (concat (map leftAndRightNodes xs))
        nodeValue (Node a _ _) = a
        leftAndRightNodes (Node _ Empty Empty) = []
        leftAndRightNodes (Node _ Empty b)     = [b]
        leftAndRightNodes (Node _ a Empty)     = [a]
        leftAndRightNodes (Node _ a b)         = [a,b]

main = do print([4,3,2,1])