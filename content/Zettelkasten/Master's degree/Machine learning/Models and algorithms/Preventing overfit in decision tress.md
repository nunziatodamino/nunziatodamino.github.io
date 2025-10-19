By construction [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Decisions tree|Decisions tree]] classify the data perfectly (have 0 empirical risk).
So are they will overfit by design.
There are different way to combat this.

## Minimum description length

Instead of minimizing the empirical risk, we add a penalty for longer trees, in the style of a [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Regularization loss minimization (RLM)|Regularization loss minimization (RLM)]] description.
The idea is to assign a code length to a tree, the longer the more penalized in the loss.
Consider a tree with $v$ nodes and $l$ leaves.
For each node i must encode a feature ($\log_2(d)$) and a threshold to choose among the $n$ data ($\sim\log_2(n)$)
For each leaf i consider $\log_2\left( \frac{n_l}{e_l} \right)$ i.e. the fraction between correctly classified example and not in the tree.
So roughly for a tree:

$$ |h| = v(\log_2(dn)) + \sum_{l} \log_2\left( \frac{n_l}{e_l} \right) $$

## Pruning

I cut some nodes to avoid overfitting.

![[Images/Preventing overfit in decision tress.png|500]]

## Random forests

This is the more robust method. One instead of building on tree over the data build different trees over a subset of the features (random subspace projection) and over a random sample $m' \neq m$ **with replacement** of the original training set (bagging - Bootstrap aggregating).
In the end one has many tree with many predictions.
We evaluate the prediction on the original dataset for each tree and choose as the prediction of the forest for each datapoint the most frequent (majority rule).
