namespace EventBus.Messages.Events;

public class BaseIntegrationEvent
{
    //CO-Relation Id
    public Guid CorrelationId { get; private set; }
    public DateTime CreationDate { get; private set; }

    public BaseIntegrationEvent()
    {
        CorrelationId = Guid.NewGuid();
        CreationDate = DateTime.UtcNow;
    }

    public BaseIntegrationEvent(Guid correlationId, DateTime creationDate)
    {
        CorrelationId = correlationId;
        CreationDate = creationDate;
    }
}