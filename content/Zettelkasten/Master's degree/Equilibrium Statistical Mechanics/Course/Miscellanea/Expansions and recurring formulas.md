## Most Important Taylor Expansions (all in one list)

Taylor expansions around $x = 0$ (Maclaurin series). For each, we show the first three nonzero terms with remainder and the formal summation.

1. **Exponential**  
   $e^x = 1 + x + \tfrac{x^2}{2!} + O(x^3)$  
   $e^x = \displaystyle \sum_{n=0}^{\infty} \frac{x^n}{n!}$

2. **Sine**  
   $\sin x = x - \tfrac{x^3}{3!} + \tfrac{x^5}{5!} + O(x^7)$  
   $\sin x = \displaystyle \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}$

3. **Cosine**  
   $\cos x = 1 - \tfrac{x^2}{2!} + \tfrac{x^4}{4!} + O(x^6)$  
   $\cos x = \displaystyle \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}$

4. **Tangent** (for $|x|<\tfrac\pi2$)  
   $\tan x = x + \tfrac{x^3}{3} + \tfrac{2\,x^5}{15} + O(x^7)$  
   $\tan x = \displaystyle \sum_{n=1}^{\infty} \frac{B_{2n}(-4)^n\bigl(1-4^n\bigr)}{(2n)!} \,x^{2n-1}$  
   *(where $B_{2n}$ are Bernoulli numbers)*

5. **Natural Logarithm** (for $|x|<1$)  
   $\ln(1+x) = x - \tfrac{x^2}{2} + \tfrac{x^3}{3} + O(x^4)$  
   $\ln(1+x) = \displaystyle \sum_{n=1}^{\infty} (-1)^{n+1} \frac{x^n}{n}$

6. **Geometric Series** (for $|x|<1$)  
   $\frac1{1-x} = 1 + x + x^2 + O(x^3)$  
   $\frac1{1-x} = \displaystyle \sum_{n=0}^{\infty} x^n$

7. **Inverse Square** (for $|x|<1$)  
   $\frac1{(1-x)^2} = 1 + 2x + 3x^2 + O(x^3)$  
   $\frac1{(1-x)^2} = \displaystyle \sum_{n=1}^{\infty} n\,x^{n-1}$

8. **Binomial** $(1+x)^\alpha$ (for $|x|<1$)  
   $(1+x)^\alpha = 1 + \alpha x + \tfrac{\alpha(\alpha-1)}{2!}x^2 + O(x^3)$  
   $(1+x)^\alpha = \displaystyle \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n$

9. **Hyperbolic Sine**  
   $\sinh x = x + \tfrac{x^3}{3!} + \tfrac{x^5}{5!} + O(x^7)$  
   $\sinh x = \displaystyle \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!}$

10. **Hyperbolic Cosine**  
    $\cosh x = 1 + \tfrac{x^2}{2!} + \tfrac{x^4}{4!} + O(x^6)$  
    $\cosh x = \displaystyle \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}$

11. **Hyperbolic Tangent**  
    $\tanh x = x - \tfrac{x^3}{3} + \tfrac{2\,x^5}{15} + O(x^7)$  
    $\tanh x = \displaystyle \sum_{n=1}^{\infty} \frac{2^{2n}\bigl(2^{2n}-1\bigr)B_{2n}}{(2n)!}\,x^{2n-1}$

12. **Inverse Hyperbolic Sine**  
    $\operatorname{arsinh}x = x - \tfrac{x^3}{6} + \tfrac{3\,x^5}{40} + O(x^7)$  
    $\operatorname{arsinh}x = \displaystyle \sum_{n=0}^{\infty} (-1)^n \frac{(2n)!}{4^n (n!)^2 (2n+1)}\,x^{2n+1}$

13. **Inverse Hyperbolic Cosine** (for $x>1$)  
    $\operatorname{arcosh}x = \ln(2x) - \tfrac1{4x^2} + O(x^{-4})$  
    $\operatorname{arcosh}x = \ln\!\bigl(x + \sqrt{x^2-1}\bigr)$

14. **Inverse Hyperbolic Tangent** (for $|x|<1$)  
    $\operatorname{artanh}x = x + \tfrac{x^3}{3} + \tfrac{x^5}{5} + O(x^7)$  
    $\operatorname{artanh}x = \displaystyle \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1}$

### Expansion of $x^{\alpha}$ around $x=1$

- **General formula:**
  $$
  x^a = \sum_{n=0}^{\infty} \binom{a}{n} (x - 1)^n \qquad \forall x \in B(1, \rho)
  $$

---

- **First few terms:**

  $$
  x^a = 1 + a(x - 1) + \frac{a(a - 1)}{2!}(x - 1)^2 + \frac{a(a - 1)(a - 2)}{3!}(x - 1)^3 + \cdots
  $$

  Valid for $|x - 1| < 1$, unless $a \in \mathbb{N}$.

---

- **Examples:**

  - Expansion of $x^{-3/2}$ around $x = 1$:

    $$
    x^{-3/2} = 1 - \frac{3}{2}(x - 1) + \frac{15}{8}(x - 1)^2 - \frac{35}{16}(x - 1)^3 + \cdots
    $$

  - Expansion of $\sqrt{x} = x^{1/2}$:

    $$
    x^{1/2} = 1 + \frac{1}{2}(x - 1) - \frac{1}{8}(x - 1)^2 + \frac{1}{16}(x - 1)^3 - \cdots
    $$

---

  For expansion around $x = 0$ (Maclaurin expansion):

  $$
  x^a = \sum_{n=0}^{\infty} \binom{a}{n} x^n, \quad \text{valid for } |x| < 1, \qquad \forall x \in B(0, \rho)
  $$

