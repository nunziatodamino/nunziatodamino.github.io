>[!info] Stirling's Formula
> $$\lim_{n} \frac{n!}{n^ne^{-n}\sqrt{2\pi n}} =1 \qquad \Rightarrow \qquad n! \sim n^ne^{-n}\sqrt{2\pi n}\quad \text{for large n} $$

Sometimes in literature is presented in the logarithmic form, i.e. :

$$ \ln (n!) = n\ln n - n + \frac{1}{2}\ln(2 \pi n) + O\left(\frac{1}{n}\right)$$

Let's derive this formula by solving [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/The Gamma function]] integral definition of the factorial using the methods developed in the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Mathematical methods/Proof of the Laplace method]].

$$ n! = \Gamma(n+1)= \int_{0}^{+\infty}dx\ x^{n} e^{-x} = \int_{0}^{+\infty}dx\ e^{n\ln x} e^{-x} =  \int_{0}^{+\infty}dx\ e^{n\ln x-x}   $$

We study now the maximum of the function $f(x) = n\ln x-x$. We have $f'(x)=0 \to \frac{n}{x}-1 =0 \to x=n$
And for the second derivative : $f''(x) =-\frac{n}{x^2} \to f''(n) =-\frac{1}{n}<0$.
So the integral converges and the main contribution is given in the neighborhood of the exponential's maxima for large $n$:

$$ = \int_{0}^{+\infty}dx\ e^{n\ln x-x} \simeq \int_{0}^{+\infty}dx\ e^{f(n) +\frac{1}{2}f''(n)(x-n)^2} = e^{n\ln n-n}\int_0^{+\infty}dx\  e^{-\frac{(x-n)^2}{2n}} = e^{n\ln n-n}\sqrt{2\pi n} $$ 
So that in the end:

$$ n! = \Gamma(n+1) \simeq n^ne^{-n}\sqrt{2\pi n}  $$

That is the Stirling's formula