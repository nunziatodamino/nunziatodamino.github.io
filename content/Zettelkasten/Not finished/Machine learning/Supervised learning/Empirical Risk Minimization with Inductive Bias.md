If one want to use the [[Zettelkasten/Not finished/Machine learning/Supervised learning/Empirical risk minimization (ERM)|Empirical risk minimization (ERM)]] approach knowing that there is the risk of [[Zettelkasten/Not finished/Machine learning/Supervised learning/The problem of overfitting|overfitting]], what one should do ?

There is a procedure that guarantees that we do not overfit even using the ERM.
This procedure consists in restricting the possible hypothesis **before** seeing the training set.

Formally, the learner should choose in advance (before seeing the data) a set of predictors. This set is called a **hypothesis class** and is denoted by $H$. Each $h \in H$ is a function mapping from X to Y. For a given class $H$, and a training sample, S, the $\text{ERM}_H$ learner (the learning algorithm) uses the ERM rule to choose a predictor $h \in H$, with the lowest possible error over $S$. Formally,

$$ \text{ERM}_H (S) \in \text{argmin}_{h\in H}L_{S}(h)$$

where argmin stands for the set of hypotheses in $H$ that achieve the minimum value of $L_S (h)$ over $H$ (there can be more that one hypothesis that achieve this)

By restricting the learner to choosing a predictor from $H$, we bias it toward a particular set of predictors. Such restrictions are often called an **inductive bias**. Since the choice of such a restriction is determined before the learner sees the training data, it should ideally be based on some prior knowledge about the problem to be learned. 
	For example, for the papaya taste prediction problem we may choose the class H to be the set of predictors that are determined by axis aligned rectangles (in the space determined by the color and softness coordinates)

