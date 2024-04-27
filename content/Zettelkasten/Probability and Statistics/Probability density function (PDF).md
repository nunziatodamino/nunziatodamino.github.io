In order to specify a [[random variable]] $X$, one can specify its probability density function, defined from the [[Cumulative density function (CDF)]] as:

$$ f_{X}(x) = \frac{d}{dx}F_{X}(x) $$

>[!note] **Properties of the PDF**
>- 
>
>$$ f_{X}(x) \geq 0 \ \forall x \in \mathbb{R}$$
>
>- 
>
>$$ F_{X}(x) = \int_{-\infty}^x f_X(u)du$$
>
>- 
>
>$$\int_{\mathbb{R}} f_X(u)du = 1$$
>
>-  
>
>$$\int_{x_1}^{x_2} f_X(u)du = \mathbb{P} \{ x_1 <X<x_2 \}$$
>
>- 
>
>$$\mathbb{P} \{ x_0 <X<x_0 + dx \} \simeq f_X(x_0)dx \qquad \mbox{if dx is small}$$
