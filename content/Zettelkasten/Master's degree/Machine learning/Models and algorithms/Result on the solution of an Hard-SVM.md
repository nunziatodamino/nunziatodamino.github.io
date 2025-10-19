Given the [[Zettelkasten/Master's degree/Machine learning/Models and algorithms/Hard Support Vector Machines (SVM)|Hard Support Vector Machines (SVM)]] framework, let's define support vectors as those particular $\bar{x}$ that lies exactly on the margin.

![[Images/Result on the solution of an Hard-SVM.png|400]]

We have a fundamental result (unproven) in hard-SVM that is the following:

>[!info] **Support vector theorem**
>The optimal solution $\bar{w}_0$ can be represented as a linear combination of support vectors

Specifically consider the set of indices of the support vectors $I = \{i \in [m] : |\braket{\bar{w_0}, \bar{x_1}}| = 1\}$.
Then this result implies that:

$$ \bar{w}_0  = \sum_{i\in I} \alpha_i\bar{x_i} \quad \alpha_i \neq 0, \  \forall i$$

Or a more cumbersome way

$$ \bar{w}_0  = \sum_{i=1}^m \alpha_i\bar{x_i} \quad \alpha_i \neq 0, \  \forall i \in I$$
