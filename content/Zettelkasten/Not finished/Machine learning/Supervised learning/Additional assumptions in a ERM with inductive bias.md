In a [[Zettelkasten/Not finished/Machine learning/Supervised learning/Empirical Risk Minimization with Inductive Bias|Empirical Risk Minimization with Inductive Bias]] we chose to restrict ourselves to a set of finite hypothesis $H$ in order to avoid [[Zettelkasten/Not finished/Machine learning/Supervised learning/The problem of overfitting|overfitting]].

In order to work we need to have additional assumption on the problem, first and most important the i.i.d. assumption.

- **i.i.d. assumption** The examples in the training set are independently and identically distributed (i.i.d.) according to the distribution $D$ That is, every $x_i$ in $S$ is freshly sampled according to $D$ and then labeled according to the labeling function, f . We denote this assumption by $S \sim D^m\equiv D'$ where m is the cardinality of S, and $D^m$ denotes the joint probability distribution.

Another assumption, that one wishes to have in general, is the realizability assumption

- **realizability assumption**




