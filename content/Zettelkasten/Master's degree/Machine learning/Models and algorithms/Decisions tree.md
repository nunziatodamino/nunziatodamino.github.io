Decisions tree are predictors $h :X \to Y$ where $Y =\{0,1\}$ where the prediction is made by inserting the data at the top node (root) and following the logical implication of the node until the point is classified.
Sometimes $X = \mathbb{R}^d$ and in that case we talk about regression trees, while when $X = \{0,1\}^d$ (i.e. a d-uple of features of either 0-1 values) we talk about classification trees.

## How to build a tree

One of the most famous algorithm to build a tree is the ID3 (Iterative Dichotomizer Tree).
We show here the implementation for a classification tree.

![[Images/Decisions tree.png|500]]

Note that in this case $\text{Gain}(S,i)$ is a function that measure **how much the split reduces the impurity in the data**.
Other text uses an analogous : how pure is the new split. (so there the criterion is one minimization)
The tree changes according to which gain we use to build the tree.
There are different ways:

- **Information Gain** : We evaluate the gain using Shannon's entropy. 
First we recall that for any sample $S$ the Shannon's entropy is:

$$ H(S) = \sum_{i}p_i\log_2(p_i) $$

Where $p_i$ is the probability to have a particular label (so simply, say for label $+1$ , $p_{+1} = n_{+1}/m$ for a sample with $m$ elements.

Then we split $S$ in $S_1$ and $S_2$ and evaluate the conditional entropy:

$$ R = \frac{|S_1|}{m}H(S_1) + \frac{|S_2|}{m}H(S_1) $$

Finally the information gain will be:

$$ G = H(S) -R $$

