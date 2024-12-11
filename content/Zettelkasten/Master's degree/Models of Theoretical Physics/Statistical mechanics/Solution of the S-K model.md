Before diving in the solution we recap what seen in the notes.
In [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The Sherrington-Kirkpatrick (S-K) model]] we defined the problem, and realized that is not possible to evaluate directly the free energy.
This is not a problem though, due to what we saw in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The concept of self-averaging]], and we shall instead evaluate the mean expression:

$$\overline{f_J} = \lim_{N\to +\infty}
-\frac{1}{N\beta} \overline{\ln Z_J}$$

Also this expression presents a problem, and the only we way to evaluate it is to introduce fictitious replicas of the system via [[Zettelkasten/Master's degree/Models of Theoretical Physics/Statistical mechanics/The replica trick]], leading to the expression: 

$$\overline{f_J} = \lim_{N\to +\infty}
\lim_{n \to 0} -\frac{1}{N\beta n} (\overline{Z_J^n}-1)$$

Then we showed that:

$$\overline{Z_J^n} \propto \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-NnA(q_{\alpha\beta})}$$

With:

$$A(q_{\alpha\beta}) = \underbrace{-\frac{\beta^2\delta^2}{4}+\frac{\beta^2\delta^2 }{2n}\sum_{\alpha<\beta} q_{\alpha\beta}^2}_{\text{energetic part}}-\underbrace{\frac{1}{n}\ln(\text{Tr}(e^{L(q_{\alpha\beta})}))}_{\text{entropic part}}$$

The idea is now the following. Via saddle-point approximation one can show

$$ \int_{\mathbb{R}} \left(\prod_{\alpha<\beta} dq_{\alpha\beta}\right)e^{-NnA(q_{\alpha\beta})} \simeq e^{-NnA(q^*_{\alpha\beta})} $$

Where the matrix elements $q^*_{\alpha\beta}$ are the solution of the saddle-point equation $\frac{\partial A}{\partial q_{\alpha \beta}} = 0$.
So if we recap:

$$\begin{aligned} \overline{f_J} & = \lim_{N\to +\infty}
\lim_{n \to 0} -\frac{1}{N\beta n} (\overline{Z_J^n}-1) = 
\lim_{n \to 0}\lim_{N\to +\infty} -\frac{1}{N\beta n} (\overline{Z_J^n}-1)\simeq \\ &\simeq \lim_{n \to 0}\lim_{N\to +\infty} -\frac{1}{N\beta n} (e^{-NnA(q^*_{\alpha\beta})}-1) \simeq \lim_{n \to 0}\lim_{N\to +\infty} -\frac{1}{N\beta n} (1-NnA(q^*_{\alpha\beta})-1) = \\ & = -\frac{1}{\beta}A(q^*_{\alpha\beta})\end{aligned}  $$
