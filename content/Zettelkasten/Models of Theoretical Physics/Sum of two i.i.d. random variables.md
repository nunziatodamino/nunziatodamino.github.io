Let's consider 2 random variables $x_1$ and $x_2$ and consider the random variable defined as $x=x_1+x_2$.
Let's find its probability density function by knowing the joint pdf.
We define:

>[!info] **pdf of the sum of the random variables**
>
>$$ q(x) =\iint dx_1dx_2\ p(x_1,x_2) \delta(x-(x_1+x_2))$$
>
>Note that this definition is very different from the rigorous one of Probability Theory, and must be seen as a working definition. 
>For a proof linking this definition to the rigorous definition see: https://math.stackexchange.com/questions/3630177/sum-of-random-variables-involving-diracs-delta| 

Now let's find the pdf specifically when the 2 variables are [[Independent identical distributed random variables (i.i.d.)|i.i.d.]].

We will have:

$$ q(x) =\iint dx_1dx_2\ p(x_1)p(x_2) \delta(x-x_1-x_2))=\iint dx_1dx_2\ p(x_1)p(x_2) \delta(x_1-(x-x_2))=$$

$$ =\int dx_2\ p(x-x_2)p(x_2) =(p *p)(x)  $$

Where we implicitly use the Dirac delta symmetry property $\delta(x)=\delta(-x)$.
==We proved that the pdf of the sum of 2 i.i.d. random variables is the convolution of their original pdf's==
One big problem is that this is generally difficult to evaluate.
So is interesting to evaluate the characteristic function of the sum of 2 i.i.d. random variables:

$$ \varphi(k) = \braket{e^{ikx}}= \int dx\ e^{ikx} q(x) =\int dx\iint dx_1dx_2\ e^{ikx}p(x_1)p(x_2) \delta(x-x_1-x_2))=$$

$$ = \iint dx_1dx_2\ e^{ik(x_1+x_2)}p(x_1)p(x_2) = [\varphi_1(k)]^2 $$

==We showed that the characteristic function of the sum of 2 i.i.d. random variables is the square of the original characteristic function==.
This is a result is clearly more useful in the determination of the parameters of the distribution.

==We make the observation that, if the variables were only independent, the characteristic function of the sum would have been the product of the original characteristic functions.==

