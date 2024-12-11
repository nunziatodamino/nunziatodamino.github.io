Suppose to consider the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Master equation]]:

$$ \partial_t \mathbb{P}(m,t) =  \sum_{m' \in E} \left[\mathcal{T}_t(m|m')\mathbb{P}(m',t)- \mathcal{T}_t(m'|m)\mathbb{P}(m,t)\right] $$

In the condition in which the process is homogeneous, i.e. when the transition rate doesn't depend explicitly on time:

$$ \partial_t \mathbb{P}(m,t) =  \sum_{m' \in E} \left[\mathcal{T}(m|m')\mathbb{P}(m',t)- \mathcal{T}(m'|m)\mathbb{P}(m,t)\right] $$

Now we want to look for stationary states, i.e. such state for which the probability is constant over time.
This implies, if we call this state $\mathbb{P}_{0}(m)$, we should have that $\partial_t \mathbb{P}_0(m)=0$, so that the condition that defines stationary states is:

>[!info] **Stationary state**
>We say that $\mathbb{P}_0(m)$ is a stationary state if :
>
$$  \sum_{m' \in E} \left[\mathcal{T}(m|m')\mathbb{P}_0(m')- \mathcal{T}(m'|m)\mathbb{P}_0(m)\right]=0 $$

Moreover we can furthermore give the definition of equilibrium state, i.e. a stationary state in which every member of the sum is 0:


>[!info] **Equilibrium state**
>We say that $\mathbb{P}_{eq}(m)$ is an equilibrium state if :
>
$$  \mathcal{T}(m|m')\mathbb{P}_{eq}(m')= \mathcal{T}(m'|m)\mathbb{P}_{eq}(m)\qquad \forall m' $$ 
>
>This condition is called detailed balance.

