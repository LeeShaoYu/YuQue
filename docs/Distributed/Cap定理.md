1998年，加州大学的计算机科学家 Eric Brewer 提出，分布式系统有三个指标。

- Consistency
- Availability
- Partition tolerance

它们的第一个字母分别是 C、A、P。

Eric Brewer 说，这三个指标不可能同时做到。这个结论就叫做 CAP 定理。

![img](https://www.wangbase.com/blogimg/asset/201807/bg2018071607.jpg)

## CAP 定理

### Partition tolerance(分区容错性)

分布式系统中的某个节点或者网络分区出现了故障的时候，整个系统仍然能对外提供满足一致性或可用性的服务，也就是说部分故障不影响整体使用。

### Availability(可用性)

在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求，也就是客户端一直可以正常访问并得到系统的正常响应。

### Consistency(一致性)

在分布式系统中的所有数据备份，在同一时刻是否同样的值。（等同于所有节点访问同一份最新的数据副本）