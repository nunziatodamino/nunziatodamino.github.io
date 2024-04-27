We recall here the [[Chapman-Kolmogorov equation]]:

$$\mathbb{P}(m\,t|m_0t_0) =\sum_{m' \in E} \mathbb{P}(m,t|m't')\mathbb{P}(m't'|m_0t_0) \qquad t_0<t'<t$$

But now I choose $t'= t- \Delta t$ with $\Delta t \simeq 0$ but large enough that the system can undergo at least one transition. We obtain:

$$\mathbb{P}(m\,t|m_0t_0) =\sum_{m' \in E} \mathbb{P}(m,t|m',t-\Delta t)\mathbb{P}(m',t-\Delta t|m_0,t_0) \qquad t_0<t'<t$$

Now we break the sum in two separate case: $m \neq m'$ and $m=m'$:

$$\mathbb{P}(m\,t|m_0t_0) = \mathbb{P}(m,t|m,t-\Delta t)\mathbb{P}(m,t-\Delta t|m_0,t_0)+\sum_{m' \in E :m'\neq m} \mathbb{P}(m,t|m',t-\Delta t)\mathbb{P}(m',t-\Delta t|m_0,t_0) $$

Now we make the following observation: for the probability conservation

$$ 1=\sum_{m' \in E} \mathbb{P}(m',t|m,t-\Delta t) \qquad \forall m$$

Because I'm considering every outcome starting from $m$ at time $t-\Delta t$. If I now split the sum as I've then above, we obtain:

$$ 1=\mathbb{P}(m,t|m,t-\Delta t)+\sum_{m' \in E:m'\neq m} \mathbb{P}(m',t|m,t-\Delta t)$$

$$ \mathbb{P}(m,t|m,t-\Delta t)=1-\sum_{m' \in E:m'\neq m} \mathbb{P}(m',t|m,t-\Delta t) \qquad \forall m $$

I then plug this in the Chapman-Kolmogorov equation, and obtain:

$$\mathbb{P}(m\,t|m_0t_0) = \left(1-\sum_{m' \in E:m'\neq m} \mathbb{P}(m',t|m,t-\Delta t)\right)\mathbb{P}(m,t-\Delta t|m_0,t_0) + $$

$$+\sum_{m' \in E :m'\neq m} \mathbb{P}(m,t|m',t-\Delta t)\mathbb{P}(m',t-\Delta t|m_0,t_0)$$

By rearranging, one obtains:

$$ \mathbb{P}(m\,t|m_0t_0) - \mathbb{P}(m,t-\Delta t|m_0,t_0)=$$

$$ = \sum_{m' \in E :m'\neq m} \mathbb{P}(m,t|m',t-\Delta t)\mathbb{P}(m',t-\Delta t|m_0,t_0)- \mathbb{P}(m',t|m,t-\Delta t)\mathbb{P}(m,t-\Delta t|m_0,t_0)$$

Finally, by dividing by $\Delta t$  and taking the limit $\Delta t \downarrow 0$, one obtains:

$$ \partial_t \mathbb{P}(m\,t|m_0t_0) =  \sum_{m' \in E :m'\neq m} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t|m_0,t_0)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t|m_0,t_0)\right] $$

Where we utilized the definition of [[Transition rate]].
Notice that, if I consider the expression for $m'=m$ the RHS becomes 0 because both members are the same. So that I can extend  the summation:

>[!info] **Master equation**
$$ \partial_t \mathbb{P}(m\,t|m_0t_0) =  \sum_{m' \in E} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t|m_0,t_0)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t|m_0,t_0)\right] $$

In order to have an unique solution this equation must be accompanied by an initial condition on the function $\mathbb{P}(m\,t|m_0t_0)$, that is in general:

$$\mathbb{P}(m,t_0|m_0t_0)=\delta_{mm_0}$$

From this equation we can obtain a statement on the absolute probability via the [[Law of total probability]]. One has to multiply both sides for $\mathbb{P}(m_0t_0)$ and sum over $m_0$, to obtain:

$$ \partial_t \mathbb{P}(m,t) =  \sum_{m' \in E} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t)\right] $$

Also this equation in order to have an unique solution this equation must be accompanied  by an initial condition of the type $\mathbb{P}(m,t_0)$.







