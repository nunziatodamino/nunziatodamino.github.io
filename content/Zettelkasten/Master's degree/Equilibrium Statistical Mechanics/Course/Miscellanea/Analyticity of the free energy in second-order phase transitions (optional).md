
**AI GENERATED**

In a second-order (continuous) phase transition, the free energy $F(t)$ and its first derivative $F'(t)$ are continuous at the critical point $t=0$, while the second derivative $F''(t)$ exhibits a jump or divergence. One can always split  
$$
F(t) = F_{\mathrm{an}}(t) + F_{\mathrm{sin}}(t)
$$  
where  
- $F_{\mathrm{an}}(t)$ is analytic around $t=0$, and  
- $F_{\mathrm{sin}}(t)$ carries the non-analytic behavior responsible for the critical singularities.

## 2. Example I: Piecewise Quadratic Free Energy  
Let  
$$
F(t)=
\begin{cases}
A\,t^2, & t<0,\\[6pt]
B\,t^2, & t>0,
\end{cases}
\quad A\neq B.
$$  
- **Continuity**: $F(0^-)=F(0^+)=0$.  
- **$C^1$**:  
  $$
  F'(t)=
  \begin{cases}
    2A\,t, & t<0,\\
    2B\,t, & t>0,
  \end{cases}
  $$
  and $\lim_{t\to0^\pm}F'(t)=0$.  
- **$C^2$ failure**:  
  $$
  F''(t)=
  \begin{cases}
    2A, & t<0,\\
    2B, & t>0,
  \end{cases}
  $$
  which jumps by $2(B-A)$ at $t=0$.

We decompose  
$$
F_{\mathrm{an}}(t) = \tfrac{A+B}{2}\,t^2,
\qquad
F_{\mathrm{sin}}(t) = \tfrac{B-A}{2}\,|t|\,t.
$$

## 3. Example II: $f(x)=x + x\,|x|$  
Define  
$$
f(x) = x + x\,\lvert x\rvert.
$$  
- **Piecewise form**  
  $$
  f(x)=
  \begin{cases}
    x - x^2, & x<0,\\[4pt]
    x + x^2, & x>0.
  \end{cases}
  $$  
- **Continuity** at $x=0$: both sides $\to0$.  
- **First derivative**  
  $$
  f'(x)
  = 1 + |x| + x\,\mathrm{sign}(x)
  =
  \begin{cases}
    1 - 2x, & x<0,\\[4pt]
    1 + 2x, & x>0,
  \end{cases}
  $$  
  so $\lim_{x\to0^\pm}f'(x)=1$.  Thus $f$ is $C^1$.  
- **Second derivative**  
  $$
  f''(x)=
  \begin{cases}
    -2, & x<0,\\[4pt]
    +2, & x>0,
  \end{cases}
  $$  
  which jumps by $4$ at $x=0$.

We split  
$$
f_{\mathrm{an}}(x)=x,
\qquad
f_{\mathrm{sin}}(x)=x\,\lvert x\rvert.
$$

## 4. General $C^1$ Decomposition  

Let $g(t)$ be any function that is $C^1$ at $t=0$.  Its Taylor polynomial up to first order,  

$$
g_{\mathrm{an}}(t)=g(0)+g'(0)\,t,
$$  

is analytic.  Defining the remainder  

$$
g_{\mathrm{sin}}(t)=g(t)-g_{\mathrm{an}}(t),
$$


all non-analytic behavior—including any jump or divergence in higher derivatives—resides in $g_{\mathrm{sin}}$.

## 5. Conclusion  

For any free energy $F(t)$ that is $C^1$ but not $C^2$ at the critical point, one has the unique split  

$$
F(t)=F_{\mathrm{an}}(t)+F_{\mathrm{sin}}(t).
$$  
The analytic part $F_{\mathrm{an}}$ provides the smooth background, while the singular part $F_{\mathrm{sin}}$ encapsulates the critical anomaly (e.g.\ the jump in $F''$ characteristic of a second-order transition).  

## 6. Extension to Two Variables

You can straightforwardly generalize the decomposition  
$$
F(t,h) = F_{\mathrm{an}}(t,h) + F_{\mathrm{sin}}(t,h)
$$  
where  
- $t = (T - T_{\mathrm{C}})/T_{\mathrm{C}}$ is the reduced temperature,  
- $h = (H - H_{\mathrm{C}})/H_{\mathrm{C}}$ is the reduced external field.

