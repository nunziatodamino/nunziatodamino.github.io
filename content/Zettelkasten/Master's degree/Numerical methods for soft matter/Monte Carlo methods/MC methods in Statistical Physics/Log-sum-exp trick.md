We define :

$$ \text{LSE}(x_1, \dots, x_n) \equiv \ln \sum_{i=1}^n\exp(x_i) = \ln(e^{x^1} + \dots + e^{x^n}) $$

In general we see that if we want to implement this as is, this will lead almost surely to under/over-flow, due to the exponential evaluation inside the logarithm (for large $x_i$ the overflow situation is clear, for small $x_i$ we risk underflow under the machine precision and subsequently the divergence.)
Then we modify it slightly:

$$ 
\begin{aligned}
y \equiv \text{LSE}(x_1, \dots, x_n)  &= \ln(e^{x^1} + \dots + e^{x^n}) \\
e^y &= \underbrace{e^{x^1} + \dots + e^{x^n}}_{\text{choose } c = \max(x_1, \dots, x_n)} \\
e^y &= e^c \left(\frac{e^{x^1}}{e^c} + \dots +1+\dots + \frac{e^{x^n}}{e^c}\right)\\
e^y &= e^c \sum_{i=1}^n\exp(x_i-c)\\
y &= c + \ln \sum_{i=1}^n\exp(x_i-c)\\
\end{aligned}
$$

This ensures numerical stability, because $\exp(x_i-c) \leq 1, \forall i$.
