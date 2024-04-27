Let's build the framework of the sum of $n$ random variables upon the work done on [[Sum of two i.i.d. random variables|2 variables]].
If one defines $x=x_1+x_2+\dots+x_n$, ,each pdf is known and also the joint pdf is known, one can define:

>[!info] **pdf of the sum of n random variables**
>
>$$ p(x) =\int \dots \int dx_1\dots dx_n\ p(x_1,\dots,x_n) \delta(x-(x_1+x_2+\dots+x_n))$$
>

Now let's focus our attention on the sum of i.i.d variables and in order to have a clear idea let's choose the case $n=3$.
The pdf will be:

$$ q(x) =\iiint dx_1dx_2dx_3\ p(x_1)p(x_2)p(x_3) \delta(x-x_1-x_2-x_3))=\iiint dx_1dx_2dx_3\ p(x_1)p(x_2)p(x_3) \delta(x_1-(x-x_2-x_3))=$$

$$ =\iint dx_2dx_3\ p(x-x_2-x_3)p(x_2)p(x_3)=\int dx_2\ p(x_2) \int dx_3\ p(x-x_2-x_3)p(x_3) =  $$

$$ \int dx_2\ p(x_2) (p*p)(x-x_2) = (p*(p*p))(x) $$

So the generalization is clear. Note also that the convolution operator is associative, i.e. $(f*(g*h))=((f*g)*h)$ so that we can drop the inner parenthesis and proceed in the calculation as we like.
==The pdf of the sum of $n$ i.i.d random variables is the n-convolution of the original pdf's==

$$ q(x) =  \underbrace{(p*p*\dots*p)}_{\mbox{n times}}(x) $$

Of course this evaluation is crazy.
Again we struck our luck with the characteristic function. For i.i.d variables:

$$ \varphi(k) = \braket{e^{ikx}} =\int dx \int \dots \int dx_1\dots dx_n\ e^{ikx} p(x_1)p(x_2)\dots p(x_x) \delta(x-(x_1+x_2+\dots+x_n)) =  $$

$$ = \int \dots \int dx_1\dots dx_n\ e^{ik(x_1+x_2+\dots+x_n)} p(x_1)p(x_2)\dots p(x_x) = [\varphi_1(k)]^n $$

So that we can conclude that ==the characteristic function of n i.i.d. random variables is the n power of the original characteristic function==.
Moreover we observe that if the variables are all independent==the characteristic function of n independent random variables is the product of the original $n$ characteristic functions==