Suppose we want to tackle the following classification problem: giving a point in $\mathbb{R}^d$ we want to know what is the probability that is label is 1. This problem reduces to the associating the point in $X = \mathbb{R}^d$ the interval $Y =[0,1] \subset \mathbb{R}$.
The hypothesis class associated to this problem is :

$$ H_{sig} = \phi_{sig}\ \circ L_D = \{ \bar{x} \to \phi_{sig}(\braket{\bar{w}, \bar{x}})\ \bar{w} \in \mathbb{R}^d  \} $$

Where $\phi_{sig} : \mathbb{R} \to [0,1]$ is the sigmoid function:

$$ \phi_{sig}(z) = \frac{1}{1+e^{-z}} $$

To which we provide the graph:

![[Images/Logistic regression.png|300]]

In this hypothesis class the loss $l : Y \times Y \to \mathbb{R}^+$ is the so called logarithmic loss:

$$ l(h(z), z) = \ln(1+e^{-y\braket{\bar{w}, \bar{x}}}) $$
