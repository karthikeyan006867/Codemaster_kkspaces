import { Lesson } from '../courses'

export const csharpLessons: Lesson[] = Array.from({ length: 60 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 20 ? 'Beginner' : i < 45 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    // Beginner (0-19)
    { title: 'C# Basics & Console', desc: 'output and syntax', content: 'Console.WriteLine(), Variables, Data Types', code: 'Console.WriteLine("Hello, C#!");\nstring name = "World";\nConsole.WriteLine($"Hello, {name}");', hint: 'Use $ for string interpolation' },
    { title: 'Variables & Types', desc: 'value and reference types', content: 'int, string, bool, double, var, const', code: 'int age = 25;\nstring name = "John";\nbool isActive = true;\nvar count = 10;', hint: 'var infers type at compile time' },
    { title: 'String Manipulation', desc: 'working with strings', content: 'Length, Substring(), Replace(), Split(), Join()', code: 'string text = "Hello World";\nstring upper = text.ToUpper();\nstring[] words = text.Split(\' \');', hint: 'Strings are immutable in C#' },
    { title: 'Arrays', desc: 'fixed-size collections', content: 'Declaration, Initialization, Indexing, Length', code: 'int[] numbers = {1, 2, 3, 4, 5};\nConsole.WriteLine(numbers[0]);\nConsole.WriteLine(numbers.Length);', hint: 'Arrays have fixed size' },
    { title: 'Lists', desc: 'dynamic collections', content: 'List<T>, Add(), Remove(), Count, foreach', code: 'List<string> names = new List<string>();\nnames.Add("Alice");\nnames.Add("Bob");', hint: 'Lists can grow dynamically' },
    { title: 'Conditional Statements', desc: 'if, else, else if', content: 'Comparison Operators, Logical Operators, Ternary', code: 'int age = 18;\nif (age >= 18) {\n  Console.WriteLine("Adult");\n} else {\n  Console.WriteLine("Minor");\n}', hint: 'Use && for AND, || for OR' },
    { title: 'Switch Statements', desc: 'multiple conditions', content: 'switch/case, break, default, Pattern Matching', code: 'string day = "Monday";\nswitch (day) {\n  case "Monday": Console.WriteLine("Start"); break;\n  default: Console.WriteLine("Other"); break;\n}', hint: 'C# 8+ supports switch expressions' },
    { title: 'While Loops', desc: 'condition-based iteration', content: 'while, do-while, break, continue', code: 'int i = 0;\nwhile (i < 5) {\n  Console.WriteLine(i);\n  i++;\n}', hint: 'do-while executes at least once' },
    { title: 'For Loops', desc: 'counted iteration', content: 'for loop, Initialization, Condition, Increment', code: 'for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}', hint: 'Declare counter in for statement' },
    { title: 'Foreach Loops', desc: 'collection iteration', content: 'foreach, IEnumerable, Arrays, Lists', code: 'int[] numbers = {1, 2, 3};\nforeach (int num in numbers) {\n  Console.WriteLine(num);\n}', hint: 'foreach is read-only iteration' },
    { title: 'Methods', desc: 'reusable code blocks', content: 'Method Declaration, Parameters, Return Types, void', code: 'static int Add(int a, int b) {\n  return a + b;\n}\nint result = Add(5, 3);', hint: 'Specify return type before method name' },
    { title: 'Method Overloading', desc: 'multiple method signatures', content: 'Overloading, Different Parameters, Same Name', code: 'static int Add(int a, int b) => a + b;\nstatic double Add(double a, double b) => a + b;', hint: 'Different parameter types or count' },
    { title: 'Exception Handling', desc: 'try, catch, finally', content: 'try/catch, Exception Types, throw, Custom Exceptions', code: 'try {\n  int x = 10 / 0;\n} catch (DivideByZeroException ex) {\n  Console.WriteLine(ex.Message);\n}', hint: 'Catch specific exceptions first' },
    { title: 'Classes & Objects', desc: 'OOP fundamentals', content: 'class, new, Fields, Properties, Methods', code: 'class Person {\n  public string Name;\n  public void Greet() {\n    Console.WriteLine($"Hi, {Name}");\n  }\n}', hint: 'Use PascalCase for class names' },
    { title: 'Constructors', desc: 'object initialization', content: 'Constructor, this keyword, Overloading', code: 'class Person {\n  public string Name;\n  public Person(string name) {\n    Name = name;\n  }\n}', hint: 'Constructor has no return type' },
    { title: 'Properties', desc: 'get and set accessors', content: 'Auto-Properties, Full Properties, get, set', code: 'class Person {\n  public string Name { get; set; }\n  private int _age;\n  public int Age {\n    get => _age;\n    set => _age = value > 0 ? value : 0;\n  }\n}', hint: 'Properties encapsulate fields' },
    { title: 'Access Modifiers', desc: 'public, private, protected', content: 'Encapsulation, Visibility, internal, protected internal', code: 'class BankAccount {\n  private decimal balance;\n  public void Deposit(decimal amount) {\n    balance += amount;\n  }\n}', hint: 'private hides implementation details' },
    { title: 'Inheritance', desc: 'extending classes', content: 'base class, derived class, virtual, override', code: 'class Animal {\n  public virtual void MakeSound() { }\n}\nclass Dog : Animal {\n  public override void MakeSound() {\n    Console.WriteLine("Bark");\n  }\n}', hint: 'Use : for inheritance' },
    { title: 'Abstract Classes', desc: 'partial implementations', content: 'abstract class, abstract methods, Inheritance', code: 'abstract class Shape {\n  public abstract double Area();\n}\nclass Circle : Shape {\n  public double Radius;\n  public override double Area() => Math.PI * Radius * Radius;\n}', hint: 'Abstract methods must be overridden' },
    { title: 'Interfaces', desc: 'contracts for classes', content: 'interface, implements, Multiple Interfaces', code: 'interface IDrivable {\n  void Drive();\n}\nclass Car : IDrivable {\n  public void Drive() {\n    Console.WriteLine("Driving");\n  }\n}', hint: 'Classes can implement multiple interfaces' },
    
    // Intermediate (20-44)
    { title: 'Generics', desc: 'type-safe generic classes', content: 'Generic Classes, Generic Methods, Type Parameters', code: 'class Box<T> {\n  public T Value { get; set; }\n}\nBox<int> intBox = new Box<int> { Value = 42 };', hint: 'Generics provide type safety' },
    { title: 'Collections - Dictionary', desc: 'key-value pairs', content: 'Dictionary<TKey, TValue>, Add(), ContainsKey()', code: 'Dictionary<string, int> ages = new Dictionary<string, int>();\nages["Alice"] = 25;\nages.Add("Bob", 30);', hint: 'Use [] for get/set values' },
    { title: 'LINQ Basics', desc: 'querying collections', content: 'from, where, select, Query Syntax', code: 'var numbers = new[] {1, 2, 3, 4, 5};\nvar evens = from n in numbers\n            where n % 2 == 0\n            select n;', hint: 'LINQ uses SQL-like syntax' },
    { title: 'LINQ Methods', desc: 'method syntax', content: 'Where(), Select(), OrderBy(), FirstOrDefault()', code: 'var numbers = new[] {1, 2, 3, 4, 5};\nvar evens = numbers.Where(n => n % 2 == 0);\nvar first = numbers.FirstOrDefault();', hint: 'Method syntax uses lambdas' },
    { title: 'Lambda Expressions', desc: 'anonymous functions', content: '=> operator, Func<T>, Action<T>', code: 'Func<int, int> square = x => x * x;\nint result = square(5);\nAction<string> print = s => Console.WriteLine(s);', hint: 'Lambdas are concise delegates' },
    { title: 'Delegates', desc: 'function pointers', content: 'delegate, Multicast Delegates, Invoke()', code: 'delegate int MathOperation(int a, int b);\nMathOperation add = (a, b) => a + b;\nint result = add(5, 3);', hint: 'Delegates reference methods' },
    { title: 'Events', desc: 'publish-subscribe pattern', content: 'event, EventHandler, += operator', code: 'class Button {\n  public event EventHandler Click;\n  public void OnClick() {\n    Click?.Invoke(this, EventArgs.Empty);\n  }\n}', hint: 'Use ?. for null-safe invocation' },
    { title: 'Nullable Types', desc: 'handling null values', content: 'Nullable<T>, ?, HasValue, Value, ?? operator', code: 'int? age = null;\nif (age.HasValue) {\n  Console.WriteLine(age.Value);\n}\nint actualAge = age ?? 0;', hint: '? makes value types nullable' },
    { title: 'Async/Await Basics', desc: 'asynchronous programming', content: 'async, await, Task, Task<T>', code: 'async Task<string> FetchDataAsync() {\n  await Task.Delay(1000);\n  return "Data";\n}\nstring data = await FetchDataAsync();', hint: 'async methods return Task' },
    { title: 'File I/O', desc: 'reading and writing files', content: 'File.ReadAllText(), File.WriteAllText(), StreamReader', code: 'string content = File.ReadAllText("data.txt");\nFile.WriteAllText("output.txt", "Hello");', hint: 'Use using for automatic disposal' },
    { title: 'Using Statement', desc: 'resource management', content: 'using, IDisposable, Automatic Cleanup', code: 'using (StreamReader reader = new StreamReader("file.txt")) {\n  string content = reader.ReadToEnd();\n}', hint: 'using ensures Dispose() is called' },
    { title: 'Extension Methods', desc: 'adding methods to types', content: 'static class, this parameter, Extensions', code: 'static class StringExtensions {\n  public static bool IsEmpty(this string str) {\n    return string.IsNullOrEmpty(str);\n  }\n}', hint: 'First parameter uses this keyword' },
    { title: 'Attributes', desc: 'metadata annotations', content: '[Attribute], Custom Attributes, Reflection', code: '[Obsolete("Use NewMethod instead")]\npublic void OldMethod() { }\n\n[Serializable]\nclass Data { }', hint: 'Attributes provide metadata' },
    { title: 'Reflection', desc: 'runtime type inspection', content: 'Type, GetType(), GetProperties(), GetMethods()', code: 'Type type = typeof(Person);\nPropertyInfo[] props = type.GetProperties();\nforeach (var prop in props) {\n  Console.WriteLine(prop.Name);\n}', hint: 'Reflection enables dynamic code' },
    { title: 'JSON Serialization', desc: 'working with JSON', content: 'JsonSerializer, Serialize(), Deserialize()', code: 'using System.Text.Json;\nvar person = new { Name = "John", Age = 30 };\nstring json = JsonSerializer.Serialize(person);\nvar obj = JsonSerializer.Deserialize<Person>(json);', hint: 'Use System.Text.Json namespace' },
    { title: 'Pattern Matching', desc: 'advanced matching', content: 'is, switch expressions, Type Patterns', code: 'object obj = "Hello";\nif (obj is string str) {\n  Console.WriteLine(str.Length);\n}\nvar result = obj switch {\n  string s => s.Length,\n  int i => i,\n  _ => 0\n};', hint: 'Pattern matching simplifies type checks' },
    { title: 'Records', desc: 'immutable data types', content: 'record, with expression, Deconstruction', code: 'record Person(string Name, int Age);\nvar person = new Person("John", 30);\nvar older = person with { Age = 31 };', hint: 'Records are for immutable data' },
    { title: 'Tuples', desc: 'multiple return values', content: 'ValueTuple, Deconstruction, Named Elements', code: '(string, int) GetPerson() => ("John", 30);\nvar (name, age) = GetPerson();\nConsole.WriteLine($"{name} is {age}");', hint: 'Use () for tuple syntax' },
    { title: 'Indexers', desc: 'custom indexing', content: 'this[], get, set, Collections', code: 'class MyCollection {\n  private int[] data = new int[10];\n  public int this[int index] {\n    get => data[index];\n    set => data[index] = value;\n  }\n}', hint: 'Indexers use this[] syntax' },
    { title: 'Operator Overloading', desc: 'custom operators', content: 'operator, +, -, *, /, Implicit/Explicit', code: 'class Vector {\n  public int X, Y;\n  public static Vector operator +(Vector a, Vector b) {\n    return new Vector { X = a.X + b.X, Y = a.Y + b.Y };\n  }\n}', hint: 'Use operator keyword' },
    { title: 'IEnumerable & IEnumerator', desc: 'custom iteration', content: 'IEnumerable<T>, yield return, GetEnumerator()', code: 'IEnumerable<int> GetNumbers() {\n  for (int i = 0; i < 5; i++) {\n    yield return i;\n  }\n}', hint: 'yield return enables lazy evaluation' },
    { title: 'Threading Basics', desc: 'multi-threading', content: 'Thread, ThreadStart, Join(), Thread Safety', code: 'Thread thread = new Thread(() => {\n  Console.WriteLine("Background thread");\n});\nthread.Start();\nthread.Join();', hint: 'Be careful with shared state' },
    { title: 'Task Parallel Library', desc: 'parallel processing', content: 'Task.Run(), Parallel.ForEach(), WaitAll()', code: 'Task task1 = Task.Run(() => DoWork1());\nTask task2 = Task.Run(() => DoWork2());\nTask.WaitAll(task1, task2);', hint: 'TPL simplifies parallelism' },
    { title: 'Dependency Injection', desc: 'IoC container', content: 'IServiceCollection, AddScoped(), Constructor Injection', code: 'services.AddScoped<IUserService, UserService>();\n\nclass Controller {\n  private readonly IUserService _service;\n  public Controller(IUserService service) {\n    _service = service;\n  }\n}', hint: 'DI promotes loose coupling' },
    { title: 'Entity Framework Basics', desc: 'ORM fundamentals', content: 'DbContext, DbSet<T>, LINQ to Entities', code: 'class AppDbContext : DbContext {\n  public DbSet<User> Users { get; set; }\n}\nusing var db = new AppDbContext();\nvar users = db.Users.Where(u => u.IsActive).ToList();', hint: 'EF maps objects to database' },
    
    // Advanced (45-59)
    { title: 'EF Migrations', desc: 'database version control', content: 'Add-Migration, Update-Database, Code First', code: '// Package Manager Console\nAdd-Migration InitialCreate\nUpdate-Database', hint: 'Migrations track schema changes' },
    { title: 'ASP.NET Core Setup', desc: 'web application basics', content: 'Program.cs, Startup, Middleware Pipeline', code: 'var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddControllers();\nvar app = builder.Build();\napp.MapControllers();\napp.Run();', hint: 'Builder pattern configures app' },
    { title: 'ASP.NET Routing', desc: 'URL mapping', content: 'Route Attributes, MapControllers(), Endpoints', code: '[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n  [HttpGet("{id}")]\n  public IActionResult Get(int id) { }\n}', hint: 'Use [Route] for API endpoints' },
    { title: 'ASP.NET Controllers', desc: 'handling HTTP requests', content: 'ControllerBase, ActionResult, Model Binding', code: '[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n  [HttpGet]\n  public ActionResult<List<User>> GetAll() {\n    return Ok(users);\n  }\n}', hint: 'Return ActionResult for flexibility' },
    { title: 'Model Validation', desc: 'data annotations', content: '[Required], [StringLength], ModelState.IsValid', code: 'public class User {\n  [Required]\n  [StringLength(50)]\n  public string Name { get; set; }\n}\nif (!ModelState.IsValid) {\n  return BadRequest(ModelState);\n}', hint: 'Validation happens automatically' },
    { title: 'ASP.NET Middleware', desc: 'request pipeline', content: 'app.Use(), next(), Custom Middleware', code: 'app.Use(async (context, next) => {\n  await next();\n  if (context.Response.StatusCode == 404) {\n    await context.Response.WriteAsync("Not Found");\n  }\n});', hint: 'Middleware processes requests in order' },
    { title: 'JWT Authentication', desc: 'token-based auth', content: 'JwtBearer, Claims, Token Generation', code: 'services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n  .AddJwtBearer(options => {\n    options.TokenValidationParameters = new TokenValidationParameters {\n      ValidateIssuer = true\n    };\n  });', hint: 'JWT enables stateless authentication' },
    { title: 'Authorization', desc: 'role-based access', content: '[Authorize], Roles, Policies, Claims', code: '[Authorize(Roles = "Admin")]\npublic IActionResult AdminOnly() { }\n\n[Authorize(Policy = "MinAge18")]\npublic IActionResult AdultsOnly() { }', hint: 'Use policies for complex rules' },
    { title: 'API Versioning', desc: 'managing API versions', content: 'Microsoft.AspNetCore.Mvc.Versioning, [ApiVersion]', code: '[ApiVersion("1.0")]\n[Route("api/v{version:apiVersion}/users")]\npublic class UsersV1Controller : ControllerBase { }', hint: 'Versioning prevents breaking changes' },
    { title: 'Swagger/OpenAPI', desc: 'API documentation', content: 'Swashbuckle, AddSwaggerGen(), UseSwagger()', code: 'builder.Services.AddSwaggerGen();\napp.UseSwagger();\napp.UseSwaggerUI(c => {\n  c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");\n});', hint: 'Swagger auto-generates docs' },
    { title: 'HttpClient', desc: 'making HTTP requests', content: 'HttpClient, GetAsync(), PostAsync(), IHttpClientFactory', code: 'var client = httpClientFactory.CreateClient();\nvar response = await client.GetAsync("https://api.example.com/users");\nvar content = await response.Content.ReadAsStringAsync();', hint: 'Use IHttpClientFactory for efficiency' },
    { title: 'Configuration', desc: 'appsettings.json', content: 'IConfiguration, Options Pattern, Environment Variables', code: 'var connectionString = configuration.GetConnectionString("DefaultConnection");\nvar apiKey = configuration["ApiSettings:Key"];', hint: 'Configuration is hierarchical' },
    { title: 'Logging', desc: 'application logging', content: 'ILogger, LogInformation(), LogError(), Serilog', code: 'public class UserService {\n  private readonly ILogger<UserService> _logger;\n  public UserService(ILogger<UserService> logger) {\n    _logger = logger;\n  }\n  public void DoWork() {\n    _logger.LogInformation("Working...");\n  }\n}', hint: 'Use structured logging' },
    { title: 'SignalR Basics', desc: 'real-time communication', content: 'Hub, Clients, Groups, WebSockets', code: 'public class ChatHub : Hub {\n  public async Task SendMessage(string user, string message) {\n    await Clients.All.SendAsync("ReceiveMessage", user, message);\n  }\n}', hint: 'SignalR enables real-time features' },
    { title: 'Background Services', desc: 'hosted services', content: 'IHostedService, BackgroundService, ExecuteAsync()', code: 'public class TimedService : BackgroundService {\n  protected override async Task ExecuteAsync(CancellationToken token) {\n    while (!token.IsCancellationRequested) {\n      await Task.Delay(TimeSpan.FromMinutes(1), token);\n      // Do work\n    }\n  }\n}', hint: 'Use for background tasks' },
    { title: 'Unit Testing', desc: 'xUnit testing', content: 'xUnit, [Fact], [Theory], Assert', code: 'public class CalculatorTests {\n  [Fact]\n  public void Add_TwoNumbers_ReturnsSum() {\n    var calc = new Calculator();\n    var result = calc.Add(2, 3);\n    Assert.Equal(5, result);\n  }\n}', hint: '[Fact] for simple tests' },
    { title: 'Mocking', desc: 'Moq framework', content: 'Mock<T>, Setup(), Verify(), It.IsAny<T>()', code: 'var mockRepo = new Mock<IUserRepository>();\nmockRepo.Setup(r => r.GetById(1)).Returns(new User { Id = 1 });\nvar service = new UserService(mockRepo.Object);', hint: 'Mocking isolates unit tests' },
    { title: 'Repository Pattern', desc: 'data access abstraction', content: 'IRepository<T>, Generic Repository, Unit of Work', code: 'interface IRepository<T> {\n  Task<T> GetByIdAsync(int id);\n  Task<IEnumerable<T>> GetAllAsync();\n  Task AddAsync(T entity);\n}', hint: 'Repository abstracts data access' },
    { title: 'CQRS Pattern', desc: 'command query separation', content: 'Commands, Queries, MediatR, Handlers', code: 'public class CreateUserCommand : IRequest<int> {\n  public string Name { get; set; }\n}\npublic class CreateUserHandler : IRequestHandler<CreateUserCommand, int> {\n  public async Task<int> Handle(CreateUserCommand request) { }\n}', hint: 'CQRS separates reads from writes' },
    { title: 'Clean Architecture', desc: 'layered design', content: 'Domain, Application, Infrastructure, Presentation', code: '// Domain\nclass User { }\n// Application\ninterface IUserService { }\n// Infrastructure\nclass UserService : IUserService { }', hint: 'Dependencies point inward' }
  ]
  
  const topic = topics[i] || topics[topics.length - 1]
  
  return {
    id: `cs-${i + 1}`,
    title: topic.title,
    description: `Learn ${topic.desc}`,
    content: `# ${topic.title}\n\n${topic.content}\n\n## Example:\n\`\`\`csharp\nusing System;\n\n${topic.code}\n\`\`\``,
    language: 'csharp' as const,
    difficulty,
    estimatedTime: 25 + i,
    initialCode: `using System;\n\nclass Program {\n  static void Main() {\n    // Your C# code here\n  }\n}`,
    solution: `using System;\n\n${topic.code}`,
    expectedOutput: 'Output',
    hints: [topic.hint, 'C# is strongly typed', 'Test your code thoroughly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.includes('using'),
        errorMessage: 'Your code should include using statements'
      }
    ]
  }
})
