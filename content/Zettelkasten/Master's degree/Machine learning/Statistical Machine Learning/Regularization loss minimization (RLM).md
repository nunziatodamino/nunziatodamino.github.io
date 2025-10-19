We can extend the idea of [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Structural risk minimization (SRM)|Structural risk minimization (SRM)]] and consider hypotheses that minimizes the quantity:

$$L_S(h) + R(h)$$

Where $R$ is a function that add to our description something respect the classic [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Empirical risk minimization (ERM)|Empirical risk minimization (ERM)]] (it can be a penalty for a richer class such as in SRM, or another mechanics).
In order to work we associate to a vector of $\mathbb{R}^d$ an hypothesis (exists the mapping $\bar{w} \to h$). Note that the inverse mapping do not always exists. 
Then the SRM can be written either respect the hypothesis or the vector, namely:

$$ h_{RLM} = \arg\!\min_{\bar{w}} \left[ L_S(\bar{w}) + R(\bar{w}) \right]\qquad \text{or} \qquad \bar{w}_{RLM} = \arg\!\min_{\bar{w}} \left[ L_S(\bar{w}) + R(\bar{w}) \right]$$

In general we can use any adequate choice for $R(\bar{w})$, but one stand over the others, the so called **Tikhonov regularization**.
The idea is to simply use as $R(\bar{w})$ the $l^2$ norm:

>[!info] Tikhonov RLM
>We choose $R(\bar{w}) = \lambda|\bar{w}|^2 = \lambda \sum_{i=1}^d w_i$, and $\lambda \in \mathbb{R}^+$. In this way the RLM rule is:
>
$$ h_{RLM} = \arg\!\min_{\bar{w}} \left[ L_S(\bar{w}) + \lambda|\bar{w}|^2 \right]\qquad \text{or} \qquad \bar{w}_{RLM} = \arg\!\min_{\bar{w}} \left[ L_S(\bar{w}) + \lambda|\bar{w}|^2 \right]$$

The $\lambda$ parameter controls the tradeoff between low empirical risk and under/over fit:
- $\lambda$ low : we are closer to ERM, we risk overfit but have lower empirical risk
- $\lambda$ high: this setting tends to prefers hypotheses with small weights, so risk of overfitting is reduced, but the empirical error might be higher.