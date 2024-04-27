Suppose we consider a random variable with PDF $f_{X}(x)$. First we observe that, by definition of variance:

$$ \text{Var}(x)=\braket{x^2}-\braket{x}^2 < \braket{x^2} $$

So that by checking the convergence of the second moment one can check the convergence of the variance
Now we recall first the definition of first and second moment:

$$ \braket{x}=\int_Sdx \ xf_{X}(x) \qquad \braket{x^2}=\int_Sdx \ x^2f_{X}(x) $$

And we relate them by remembering the so called Holder inequality:

$$ \left| \int_S dx\ f(x)g(x) \right| \leq \left(\int_S dx\ f^p(x)\right)^{\frac{1}{p}}\left(\int_S dx\ g^q(x)\right)^{\frac{1}{q}} \qquad p,q\in[1,+\infty]:\frac{1}{p}+\frac{1}{q}=1 $$

If we now choose $p=q=2$ and $f(x) = x\sqrt{f_{X}(x)}$ , $g(x) = \sqrt{f_{X}(x)}$ we obtain:

$$ \braket{x}=\left| \int_S dx\ xf_{X}(x) \right| \leq \left(\int_S dx\ x^2f_{X}(x)\right)^{\frac{1}{2}}\left(\int_S dx\ f_{X}(x)\right)^{\frac{1}{2}}= \left(\int_S dx\ x^2f_{X}(x)\right)^{\frac{1}{2}}=\sqrt{\braket{x^2}} < +\infty $$

==This chain proves that, if the variance is finite (non-zero) then automatically the mean will be finite==