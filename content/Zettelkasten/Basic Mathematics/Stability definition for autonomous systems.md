## Local definitions

Given an autonomous system we have the following concepts of stability for a given equilibrium trajectory (note that the equilibrium point is also called in literature “equilibrium solution”,“fixed point,” “stationary point,” “rest point,” “singularity,” “critical point,” or “steady state.” ) :

>[!info] **Lyapunov stability**
> Suppose that $\bar{x}^*(t)$ is an equilibrium point of a given autonomous system.
> The solution $\bar{x}^*(t)$ is stable according to Lyapunov, (or Lyapunov stable, or simply stable) if given a generic solution of the system $\bar{y}(t)$ in a neighbourhood of $\bar{x}^*(t)$ :
> 
> $$ \forall \varepsilon>0\  \exists \delta>0 :\ \forall \bar{y}(t) \in B(\bar{x}^*(t_0), \delta) \ \Rightarrow\ |\bar{x}^*(t)-\bar{y}(t)|_{\mathbb{R}^n} <\varepsilon\ , \forall t>t_0$$

>[!info] **Asymptotic stability (AS)**
> Suppose that $\bar{x}^*(t)$ is an equilibrium point of a given autonomous system.
> The solution $\bar{x}^*(t)$ is asymptotically stable (AS) if is Lyapunov stable, and moreover:
> 
> $$ \forall \bar{y}(t), \exists b>0\ : \text{if}\ |\bar{x}^*(t_0)-\bar{y}(t_0)|_{\mathbb{R}^n} <b\ \Rightarrow\ \lim_{t \to + \infty}|\bar{x}^*(t)-\bar{y}(t)|_{\mathbb{R}^n}=0$$

We provide a geometric interpretation of the 2 stabilities via picture:

![[Stabilities differences for autonomous systems.png|500]]==

Moreover we define:

>[!info] **Exponential stability (ES) also known as linear stability (LS)**
> Suppose that $\bar{x}^*(t)$ is an equilibrium point of a given autonomous system.
> The solution $\bar{x}^*(t)$ is exponentially stable (ES) or linearly stable (LS), if :
> 
> $$\forall \alpha, \lambda>0\exists \delta > 0 :\forall \bar{y}(t) \in B(\bar{x}^*(t_0), \delta)\ \Rightarrow\ |\bar{x}^*(t)-\bar{y}(t)|<\alpha e^{-\lambda t}|\bar{x}^*(t_0)-\bar{y}(t_0)|\qquad \forall t>t_0$$

From these definitions comes the important remark:

>[!warning] **Remark**
> ES $\to$ AS $\to$ Lyapunov stability.
> All the opposite implications are false.

## Global definitions

All the saw definitions are defined as local concepts, i.e. in a neighborhood of the equilibrium point $\bar{x}^*(t)$.
We now try to extent these definitions.

>[!info] **Global asymptotic stability (GAS)**
> Suppose that $\bar{x}^*(t)$ is an equilibrium point of a given autonomous system.
> The solution $\bar{x}^*(t)$ is globally asymptotically stable (GAS) if is Lyapunov stable, and moreover:
> 
> $$ \forall \bar{y}(t) \in \mathbb{R^n} \Rightarrow\ \lim_{t \to + \infty}|\bar{x}^*(t)-\bar{y}(t)|_{\mathbb{R}^n}=0$$

>[!info] **Global exponential stability (GES) also known as global linear stability (GLS)**
> Suppose that $\bar{x}^*(t)$ is an equilibrium point of a given autonomous system.
> The solution $\bar{x}^*(t)$ is globally exponentially stable (GES) or globally linearly stable (GLS), if :
> 
> $$\exists \alpha, \lambda>0 :\forall \bar{y}(t) \in \mathbb{R}^n\ \Rightarrow\ |\bar{x}^*(t)-\bar{y}(t)|<\alpha e^{-\lambda t}|\bar{x}^*(t_0)-\bar{y}(t_0)|\qquad \forall t>t_0$$

>[!warning] **Remark**
> GES $\to$ GAS .
> The opposite implications is false.

