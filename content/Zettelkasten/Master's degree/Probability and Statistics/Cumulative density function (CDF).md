In order to specify a [[random variable]] $X$, one can specify its cumulative distribution function, defined as:

$$ F_{X}(x) = \mathbb{P}\{ X \leq x \}\qquad \forall x \in \mathbb{R}$$

Let's define some of its properties:

>[!note] Properties of the CDF
>- 
$$ \lim_{x \to +\infty} F_{X}(x) = 1 \qquad \lim_{x \to -\infty} F_{X}(x) = 0$$
>
>- 
$$ \forall x_2, x_1 : x_2>x_1 \qquad F_{X}(x_2) \geq F_{X}(x_1) $$
>
>- $$ \mathbb{P}\{ X > x \} = 1 - \mathbb{P}\{ X \leq x \} = 1- F_{X}(x)$$
>
>- 
$$\mathbb{P}\{ x_1 \leq X \leq x_2 \} = F_{X}(x_2)- F_{X}(x_1) \qquad \forall x_1, x_2: x_1<x_2 $$
>
>- 
$$\mathbb{P}\{ X = x \} = F_{X}(x^+) - F_{X}(x^-)$$

