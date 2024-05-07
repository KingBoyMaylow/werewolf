Class Lycanthrope
A    public string Name { get; set; }
    public int Age { get; set; }
    public List<string> EventLog { get; set; }

    public Lycanthrope(string name, int age)
    {
        Name = name;
        Age = age;
        EventLog = new List<string>();
    }

    public void RecordEvent(string eventDescription)
    {
        EventLog.Add(eventDescription);
    }
}

class Program
{
    static void Main()
    {
        Lycanthrope werewolf = new Lycanthrope("Alpha", 100);

        while (true)
        {
            Console.WriteLine("Enter an event for the werewolf (or type 'exit' to quit):");
            string input = Console.ReadLine();

            if (input.ToLower() == "exit")
            {
                break;
            }

            werewolf.RecordEvent(input);
        }

        Console.WriteLine("\nWerewolf Event Log:");
        foreach (string logEntry in werewolf.EventLog)
        {
            Console.WriteLine(logEntry);
        }

        // Add analysis of the log to determine triggers for the werewolf transformation
    }
}