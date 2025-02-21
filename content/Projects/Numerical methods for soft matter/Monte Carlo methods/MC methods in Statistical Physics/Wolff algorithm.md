Let's consider a 2D Ising model. Instead of performing local moves like in [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Dynamic Monte Carlo methods for the Ising model|Glauber or Kawasaki dynamics]], where we operate on a single spin, it can be an idea to choose an entire spin cluster an flip it as a local move.

![[Wolff algorithm.png|400]]

The idea is simple : we choose a site $\sigma_{r_i}$ at random in the lattice, and then count the aligned neighbors (i.e vertical or horizontal outside). For each of them either we include the external spin in the cluster with probability $P_{add}$, or not, with probability $1-P_{add}$. We do this process until the the cluster stops growing, then we flip all the spins simultaneously. 
Now we want to find the probability of this process.
In reference to the figure, suppose we form the first red cluster, then we add the yellow, the cyan and finally we stop and we are ready for the spin flip.
In this way $\Gamma_{ij} =P_{c1}P_{c2}P_{c3}(1-P_{add})^{b_i} \propto (1-P_{add})^{b_i}$ , where $b_i$ is the number of neighbors of the same sign in state $i$, and $P_{c_n}$ is the probability to form the n-cluster given the others and $(1-P_{add})^{b_i}$ is the probability to stop the cluster growing.
Note of course that $\Gamma_{ji} =P_{c1}P_{c2}P_{c3} (1-P_{add})^{b_j} \propto (1-P_{add})^{b_j}$, where is important to state that they have the same proportionality.
Supposing now to in a canonical ensemble, we have for each state a limiting distribution $\pi(l) \propto e^{-\beta E(l)}$, so that we can write the detailed balance as :

$$ \frac{a_{ij}}{a_{ji}}=\frac{\pi(j)\Gamma_{ji}}{\pi(i)\Gamma_{ij}} = e^{-\beta(E(j)-E(i))} (1-P_{add})^{b_j-b_i} $$

Now we can evaluate immediately evaluate the energy difference $E(j)-E(i) = -2J(b_j-b_i)$ , so that :

$$ \frac{a_{ij}}{a_{ji}} = e^{2\beta J(b_j-b_i)} (1-P_{add})^{b_j-b_i} = [e^{2\beta J}(1-P_{add})]^{b_j-b_i} $$

If we now choose :

$$ P_{add} = 1-e^{-2\beta J} $$

This guarantees that $a_{ij} = a_{ji} = 1$, i.e. **a rejection free algorithm**.

Given that this algorithm must be compared with the single-flip ones, is important to evaluate for this comparison the average cluster size $S(\beta)$. We start with some considerations. 
First, given that $P_{add}$ is temperature dependent, also the average cluster size $S(\beta)$ will be. 
For high temperatures $\beta \to 0$, given that $P_{add} \to 0$, we will have a single spin cluster, i.e $S(\beta) \to 1$, while for low temperatures $\beta \to +\infty$, given that $P_{add} \to 1$, we will have cluster of the order of the entire lattice, i.e $S(\beta) \to L^d$, where $d$ is the system dimensionality.
The average cluster size can also be used to determine the Monte Carlo sweep, we will consider a MC sweep composed of $N_{MC} = N/S(\beta)$ cluster moves (given that on average a MC sweep must ''move'' all the lattice), where $N = L^d$ is the total number of spins in the lattice.
### Consideration on the critical slowing down 

This algorithm is perfect for exploring the Ising model in the neighborhood of, or at, the critical temperature. 
We recall that in a single spin dynamics, the [[Projects/Numerical methods for soft matter/Monte Carlo methods/MC methods in Statistical Physics/Critical slowing down in the Ising model|critical slowing down]] implies:

$$ \tau \sim [\min(\xi, L)]^z \sim L^z $$

Where $z$ is a dynamical critical exponent (for the 2D Ising model $z \simeq 2.27$). 
In the case of the Wolff dynamics :

$$ \tau \sim \frac{\tau_{\text{Wolff}}}{N_{MC}} \sim L^{\tilde{z}} $$

Where $\tau_{\text{Wolff}}$ is the autocorrelation time between different MC sweeps. This time $\tilde{z} \simeq 0.25$ for the 2D Ising model, reducing drastically the critical slowing down phenomenon.
