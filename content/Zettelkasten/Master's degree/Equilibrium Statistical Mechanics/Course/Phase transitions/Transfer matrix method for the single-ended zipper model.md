### Preliminaries

![[Images/The Zipper model.png]]

Let's consider a single-ended zipper as the one defined in [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/The zipper model|The zipper model]].
**We remove in this case the constraint that no bubbles are admitted.**

We'll associate to each link a number: 
- link $i$ has number $s_i = 0$ if the link is closed.
- link $i$ has number $s_i \neq 0$ if the link is open. Moreover if $G$ is the degeneracy, i.e. the possible configuration that the chain can achieve once the link is open, we set $s_i = G$

Now let's evaluate the energy landscape:
- if link $i$ is closed, then it's energy it's zero, either if $s_{i-1}$ is open or closed:
$$ E(s_i=0)  =0 \qquad \forall s_{i-1}$$
- if link $i$ is open, 2 situations arises: 
	- if the preceding link $i-1$ is opened, so the energy associated to the single bond is the same one seen in the zipper model : 
	$$ E(s_i\neq0 | s_{i-1}\neq0) = \varepsilon_0 $$
	
	- if the preceding link $i-1$ is closed, the system forms a bubble, so the cost in energy is higher than the simple bond breaking, and an energy nucleation cost $V_0$ must be added: 
	$$ E(s_i\neq0 | s_{i-1} = 0) = \varepsilon_0 + V_0 $$

Finally we consider the constraint in which the last link is always closed, i.e. $s_N = 0$.
In general the energy of a link $i$ given the link $i-1$ can be written as a function of delta function:

$$ 
E(s_i|s_{i-1}) = 
\begin{cases} 
\varepsilon_0 & \text{if}\ s_i\neq0,  s_{i-1}\neq0 \\
\varepsilon_0+V_0 & \text{if}\ s_i\neq0,  s_{i-1}=0 \\
0 & \text{if}\ s_i=0, \forall s_{i-1} \\
\end{cases}

\iff

E(s_i|s_{i-1}) = (1-\delta_{s_i, 0})(\varepsilon_0 + V_0\delta_{s_{i-1},0})

$$

This because, if $s_i = 0 \iff (1-\delta_{s_i, 0}) = 0$, while if $s_i \neq 0 \iff (1-\delta_{s_i, 0}) = 1$ and we evaluate the second delta to add or not the nucleation contribution.
The total Hamiltonian of the system will be:

$$ \mathscr{H}_N = E(s_1|s_0) + \sum_{i=2}^{N-1}E(s_i|s_{i-1}) =\varepsilon_0(1-\delta_{s_1,0}) + \sum_{i=2}^{N-1}(1-\delta_{s_i, 0})(\varepsilon_0 + V_0\delta_{s_{i-1},0}) $$

**Note that we are implicitly assuming that the first link is always opened**. In this case there cannot be a bubble and the only possibility is that the successive link is either closed or opened.

**Note now that we can now enforce the no-bubble constraint by setting the nucleation energy to infinite $V_0 = +\infty$** 

### Partition function 

We build the partition function in the usual way :

$$ 
\begin{aligned}
\mathcal{Z}_N =
\sum_{\{s\}}e^{{-\beta\mathscr{H}}} &= \sum_{\{s\}}e^{-\beta\left( \varepsilon_0(1-\delta_{s_1,0}) + \sum_{i=2}^{N-1}(1-\delta_{s_i, 0})(\varepsilon_0 + V_0\delta_{s_{i-1},0})  \right)} = \\
&= \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=2}^{N-1}e^{-\beta(\varepsilon_0 + V_0\delta_{s_{i-1},0})(1-\delta_{s_i, 0}) } = \\ 
&= \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=2}^{N-1}e^{-\beta\varepsilon_0(1-\delta_{s_i, 0})}  e^{-\beta (V_0\delta_{s_{i-1},0})(1-\delta_{s_i, 0}) } = \\
&= \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=2}^{N-1}e^{-\beta\varepsilon_0(1-\delta_{s_i, 0})}  e^{-\beta V_0(\delta_{s_{i-1},0}(1-\delta_{s_i, 0})) } = \\
&= \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=1}^{N-2}e^{-\beta\varepsilon_0(1-\delta_{s_{i+1}, 0})}  e^{-\beta V_0(\delta_{s_{i},0}(1-\delta_{s_{i+1}, 0})) }\\
\end{aligned}$$

Where in the last line we set $i' = i-1$ and then omitted the apex for a cleaner notation.
We now make the following observation : the quantity $\delta_{s_{i+1},0}(1-\delta_{s_i, 0})\equiv \chi$ is an indicator function.
In fact if $s_{i} = 0, s_{i+1} \neq 0$ and $s_{i} \neq 0, s_{i+1} = 0$ we have $\chi = 1$, while if $s_{i} = 0, s_{i+1} = 0$ and $s_{i} \neq 0, s_{i+1} \neq 0$ we have $\chi = 0$.
So that one can write if one wishes $\chi = \mathbb{1}_{[s_{i} = 0, s_{i+1} \neq 0]}$.
Now we continue observing the following : for any indicator function (or binary operator) it holds that $e^{a\chi} = 1 +(e^a-1)\chi$.
This can be proven easily by substituting to $\chi$ 0 and 1 and see that the equality holds.
Given these observations we can write the partition function as :

$$ 
\begin{aligned}
\mathcal{Z}_N = \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=1}^{N-2}e^{-\beta\varepsilon_0(1-\delta_{s_{i+1}, 0})} \left[ 1+ \left( e^{-\beta V_0 } -1 \right) \delta_{s_{i},0}(1-\delta_{s_{i+1}, 0}))\right]
\end{aligned}$$

**Now we can enforce the no-bubble condition $V_0 \to +\infty \iff e^{-\beta V_0} \to 0$.**
The partition function then becomes:

$$ 
\begin{aligned}
\mathcal{Z}_N = \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=1}^{N-2}e^{-\beta\varepsilon_0(1-\delta_{s_{i+1}, 0})} \left[ 1-\delta_{s_{i},0}(1-\delta_{s_{i+1}, 0}))\right]
\end{aligned}$$

Now, if we set:

$$\braket{s_i|T|s_{i+1}} = T_{s_i, s_{i+1}} \equiv e^{-\beta\varepsilon_0(1-\delta_{s_{i+1}, 0})} \left[ 1-\delta_{s_{i},0}(1-\delta_{s_{i+1}, 0}))\right] $$

We obtain the simplified expression

$$ 
\begin{aligned}
\mathcal{Z}_N = \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=1}^{N-2}T_{s_i,s_{i+1}}  = \sum_{\{s\}}e^{-\beta \varepsilon_0(1-\delta_{s_1,0})} \prod_{i=1}^{N-2}\braket{s_i|T|s_{i+1}} \end{aligned}$$

This form is clearly typical of a transfer matrix formalism.
The explicit form for the matrix $T$ with its eigenvalue calculations is found [[Zettelkasten/Master's degree/Equilibrium Statistical Mechanics/Course/Phase transitions/Transfer matrix in the zipper model|here]].

