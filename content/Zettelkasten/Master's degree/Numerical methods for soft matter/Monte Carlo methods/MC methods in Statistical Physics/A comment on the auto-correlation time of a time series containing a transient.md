Suppose to have a set of time series of observables containing in the first part of the evolution a transient state, i.e. a non stationary state.
**If one evaluates the autocorrelation function on the entire time series makes a mistake. First an appropriate amount of measure must be discarded (of the order $\tau_{eq} \sim 20 \tau$), and then one can evaluate the autocorrelation function.**
But how to evaluate $\tau$ if we cannot use the whole series ? Which portion we have to use ? Easy, it's irrelevant, just choose a point far enough from the start.
If our dynamics is correct and our iterations are high enough, then we reached equilibrium, and our process is either stationary or weakly stationary, implying that the autocorrelation function:

$$ C_O(s, s+t) = C(0,t)\qquad \forall s $$

**Note that this equality is true only when the process is [[Projects/Stationary and homogeneous random fields|(weakly) stationary]] not on the entire time series.**
We show this with a specific example from a simulation if a 50 x 50 Ising model, using a spin flip dynamics with a Metropolis update rule, for 100000 iterations. After the energy per spin time series is acquired, we plot, for a fixed $\beta$:

```python
for time in range(0, MC_TIMESTEPS, 10000):
	plot_acf(energy_per_spin[0][time:], ax=plt.gca(), alpha=None, start Time: {time}')
plt.title('Autocorrelation of Energy per Spin')
plt.show()
```

We obtain the following figure:

![[Images/A comment on the auto-correlation time of a time series containing a transient.png|400]]

Notice that the first acf (autocorrelation function) is the one on the whole time series, and is way higher than the others, that starts all at different times, but are approximatively the same, indicating that we are indeed in a stationary state.
Extracting $\tau$ here leads to a error overestimation. 

Notice instead what happens if we modify the code to exclude, say, the first 5000 points, an estimation of what we think is the duration of the transient state:

```python
for time in range(5000, MC_TIMESTEPS, 10000):
	plot_acf(energy_per_spin[0][time:], ax=plt.gca(), alpha=None, start Time: {time}')
plt.title('Autocorrelation of Energy per Spin')
plt.show()
```

The plot is now:

![[Images/A comment on the auto-correlation time of a time series containing a transient-1.png|400]]

And the value of $\tau$ is finally well defined. Now, if we evaluate $\tau$ from this, and choose $t_{start} \simeq 20 \tau$ we minimize the rejected samples and, more importantly, can establish upper bounds for our iterations in order to achieve a predetermined accuracy in percentage $\alpha$. Say, to achieve $\alpha \%$ accuracy we need to choose $t_max = $