We see in this note how to implement efficiently ERM for the decision stump class in $\mathbb{R}^d$:

$$ H_{\text{DS}} = \{\bar{x} \to \text{sgn}(\vartheta -x_i)b\ : \vartheta \in \mathbb{R}, i \in [d], b \in \{-1,+1\} \} $$

The name of the game is optimization, as this algorithm is the basis for the [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/AdaBoost|AdaBoost]] algorithm. So we will do many things that seem counterintuitive , but are just optimization.
First we decide to fix $b = +1$ to reduce computational complexity (this is formally called to choose a polarity of the stump).
Then, instead of minimizing the empirical risk we minimize the following quantity: consider $\bar{d} = (d_1, \dots, d_m)$ with the constraint $\sum_i d_i = 1$ and $d_i \geq 0, \ \forall i$. (Note that this imply that $\bar{d}$ is a probability mass function).
Then we define the weighted empirical risk:

$$ L_{\bar{d},S}(h) \equiv L_{\bar{d}}(h) = \sum_{i=1}^md_i \mathbb{1}_{[h(x_i)\neq y_i]} $$

This is a way to apply weights to the empirical risk. In fact, if one chooses $\bar{d} = \left(\frac{1}{m}, \dots \frac{1}{m} \right)$ the definition coincides with the canonical empirical risk.
Suppose then we want to minimize this weighted version of the empirical risk. In this algo $\bar{d}$ is fixed, so we are minimizing over the hypothesis class:

$$ \min_{h \in H_{\text{DS}} }   L_{\bar{d}}(h)$$

This is equivalent, by definition of the class, to choose a particular index and threshold that minimize the quantity.
We can rewrite the minimization as:

$$ \min_{j \in[d]}\min_{\vartheta \in \mathbb{R}}\sum_{i=1}^md_i \mathbb{1}_{[\text{sgn}(\vartheta -x_{i,j}) \neq y_i]}  = \min_{j \in[d]}\min_{\vartheta \in \mathbb{R}} \left(\sum_{i:y_i = 1} d_i \mathbb{1}_{[x_{i,j}\leq \vartheta]} + \sum_{i:y_i = -1} d_i \mathbb{1}_{[x_{i,j}> \vartheta]} \right)  $$

To have then a better division for future data points, we will not use as threshold the point coordinates themselves, but their middle-point (this is also an optimization)
We define the set of middle-points in the dimension $j$:

$$ \Theta_j = \left\{ \frac{x_{i,j} +x_{i+1,j}}{2}, i\in[m-1] \right\} \cup \{(x_{1,j}-1), (x_{m,j}+1)\}$$

Finally the last optimization is to start the weighted empirical risk with the assumption that all point all labeled as $+1$, i.e. we start by setting the initial threshold at the minimum of the data set.
Then we proceed one data point at the time to the right and update the error, until we find the minimum.

![[Images/Efficient ERM for decision stumps.png|500]]

