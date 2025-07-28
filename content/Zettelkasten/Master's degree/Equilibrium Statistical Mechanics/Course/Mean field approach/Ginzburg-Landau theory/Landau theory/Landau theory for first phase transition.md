We explore now more general form of the Landau free energy to encapsulate also the first phase transitions.
Suppose to have a free energy that does not have a particular symmetry.
Then from the general consideration in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Landau theory/Landau free energy expression for the Ising model|Landau free energy expression for the Ising model]] that applies to any free energy function, and from [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Mean field approach/Ginzburg-Landau theory/Landau theory/On cubic terms in a Landau free‐energy expansion (optional)|On cubic terms in a Landau free‐energy expansion (optional)]], we can write:

$$ \mathscr{L}(\eta) = A_1 t \eta^2 -w\eta^3 + B_0\eta^4 + \mathcal{O}(\eta^5) $$

Or equivalently, if we consider the external field defined by the relation $h = \frac{\partial \mathscr{L}}{\partial \eta}$, we can write the Gibbs free energy ;

$$ \mathscr{L}_G(\eta) = \mathscr{L}(\eta) -h\eta $$

We recall that for $T<T_C \to A_1t <0$, $T>T_C \to A_1t >0$, while for any temperature $w>0$ and  $B_0 >0$.
### Equation of state

We study the system equilibrium:

$$ \frac{\partial \mathscr{L}_G }{\partial \eta} = 0 \iff h=\eta \left(2A_1t -3w\eta +4B_0\eta^2\right) $$

Now we study the equilibrium states when $h=0$. We find:

- $\eta = 0$
- $\eta_{\pm} = \frac{1}{8B_0} \left( 3w \pm \sqrt{9w^2 -32A_1B_0t} \right)$

Of particular interest is the second set of solution. First we rewrite for ease of use: $\eta_{\pm} = \frac{1}{8B_0} \left( 3w \pm \sqrt{9w^2 -32A_1B_0t} \right) = c \pm \sqrt{c^2 -\frac{A_1t}{2B_0}}$, where $c=\frac{3w}{8B_0}$
Note now that for  $T<T_C \iff t<0 \to A_1t <0$ so that these solution exists. Instead for $T>T_C \iff t>0 \to A_1t >0$ the $\eta_{\pm}$ exists only if $c^2 -\frac{A_1t}{2B_0} \geq 0 \iff t \leq \frac{2B_0c^2}{A_1} \equiv \tilde{t}$.
Note that in this way we can rewrite elegantly: $\eta_{\pm}= c \pm \sqrt{c^2 -\frac{A_1t}{2B_0}} \equiv c \left( 1 \pm \sqrt{1 -\frac{t}{\tilde{t}}} \right)$
So, in the end we have that for $t\leq \tilde{t}$ we have all 3 solutions while for $t > \tilde{t}$ we have only the solution $\eta = 0$
Note also that for $t< \tilde{t} \iff \frac{t}{\tilde{t}}<1$ so all 3 solutions are positive (in the right part of the graph)
For $t=\tilde{t}$ the solutions $\eta_{\pm}$ coincides and become $\eta_{\pm} = c$.
We can define the value of $t_t$ for which $\mathscr{L}(\eta_+(t_t)) = \mathscr{L}(0)$. For this value under ($0\leq t<t_t$) the $\eta_+$ becomes a stable point rather than a meta-stable point. Note that the condition $\mathscr{L}(\eta_+(t_t)) = \mathscr{L}(0)$ is a **coexistence condition** between the disordered and ordered phase.
**This imply that $t_t$ is the temperature on which the system undergoes a first order phase transition.**
We evaluate it in the calculations. Is $t_t = \tilde{t} \frac{w}{B_0c}\left(1-\frac{w}{4c}\right)$
All ends at $t=0$, when $\eta_- =0$ and $\eta_+ = 2c$ where we have only one stable equilibrium point at $\eta_+$.
We report here a qualitative picture of the scheme.

![[Images/Landau theory for first phase transition.png|500]]
