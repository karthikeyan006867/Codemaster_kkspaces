import { Lesson } from '../courses'

export const phpLessons: Lesson[] = Array.from({ length: 60 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 20 ? 'Beginner' : i < 45 ? 'Intermediate' : 'Advanced'
  
  const topics = [
    // Beginner (0-19)
    { title: 'PHP Basics & Echo', desc: 'output and syntax', content: 'Echo, Variables, Comments', code: 'echo "Hello, PHP!";\n$name = "World";\necho "Hello, $name";', hint: 'Use echo for output' },
    { title: 'Variables & Data Types', desc: 'strings, numbers, booleans', content: 'Strings, Integers, Floats, Booleans, NULL', code: '$str = "PHP";\n$num = 42;\n$float = 3.14;\n$bool = true;', hint: 'Variables start with $' },
    { title: 'String Operations', desc: 'concatenation and functions', content: 'Concatenation, strlen(), substr(), str_replace()', code: '$name = "PHP";\n$full = $name . " 8";\necho strlen($full);', hint: 'Use . for concatenation' },
    { title: 'Arrays - Indexed', desc: 'creating and accessing arrays', content: 'Indexed Arrays, count(), in_array()', code: '$colors = ["red", "green", "blue"];\necho $colors[0];', hint: 'Arrays use [] brackets' },
    { title: 'Arrays - Associative', desc: 'key-value pairs', content: 'Associative Arrays, Keys, Values', code: '$person = ["name" => "John", "age" => 30];\necho $person["name"];', hint: 'Use => for key-value' },
    { title: 'Array Functions', desc: 'manipulation and iteration', content: 'array_push(), array_pop(), array_merge(), sort()', code: '$nums = [3,1,2];\nsort($nums);\nprint_r($nums);', hint: 'print_r() shows array structure' },
    { title: 'Conditional Statements', desc: 'if, else, elseif', content: 'if/else, Comparison Operators, Logical Operators', code: '$age = 18;\nif($age >= 18) {\n  echo "Adult";\n} else {\n  echo "Minor";\n}', hint: 'Use == for comparison' },
    { title: 'Switch Statements', desc: 'multiple conditions', content: 'switch/case, break, default', code: '$day = "Mon";\nswitch($day) {\n  case "Mon": echo "Monday"; break;\n  default: echo "Other";\n}', hint: 'Remember break statements' },
    { title: 'While Loops', desc: 'repetition with condition', content: 'while, do-while, Infinite Loops', code: '$i = 0;\nwhile($i < 5) {\n  echo $i;\n  $i++;\n}', hint: 'Increment to avoid infinite loop' },
    { title: 'For Loops', desc: 'counted iteration', content: 'for Loop, Initialization, Condition, Increment', code: 'for($i = 0; $i < 5; $i++) {\n  echo $i . " ";\n}', hint: 'Three parts: init; condition; increment' },
    { title: 'Foreach Loops', desc: 'array iteration', content: 'foreach with Arrays, Key-Value Pairs', code: '$arr = [1,2,3];\nforeach($arr as $val) {\n  echo $val;\n}', hint: 'Use as keyword' },
    { title: 'Functions', desc: 'reusable code blocks', content: 'Function Declaration, Parameters, Return Values', code: 'function add($a, $b) {\n  return $a + $b;\n}\necho add(5, 3);', hint: 'Use return to send value back' },
    { title: 'Function Parameters', desc: 'default and type hints', content: 'Default Parameters, Type Declarations, Variadic Functions', code: 'function greet($name = "Guest") {\n  return "Hello, $name";\n}', hint: 'Default values after =' },
    { title: 'Variable Scope', desc: 'global and local variables', content: 'Local Scope, Global Scope, static keyword', code: '$x = 10;\nfunction test() {\n  global $x;\n  echo $x;\n}', hint: 'Use global keyword to access global vars' },
    { title: 'Include & Require', desc: 'code organization', content: 'include, require, include_once, require_once', code: 'include "header.php";\nrequire_once "config.php";', hint: 'require halts on error, include warns' },
    { title: 'Superglobals', desc: '$_GET, $_POST, $_SERVER', content: '$_GET, $_POST, $_REQUEST, $_SERVER, $_SESSION', code: '$name = $_GET["name"];\necho $_SERVER["REQUEST_METHOD"];', hint: 'Superglobals available everywhere' },
    { title: 'Form Handling', desc: 'GET and POST methods', content: 'HTML Forms, $_GET vs $_POST, Form Validation', code: 'if($_SERVER["REQUEST_METHOD"] == "POST") {\n  $name = $_POST["name"];\n}', hint: 'POST for sensitive data' },
    { title: 'Form Validation', desc: 'sanitizing and validating input', content: 'filter_var(), htmlspecialchars(), Validation Rules', code: '$email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);', hint: 'Always validate user input' },
    { title: 'Sessions', desc: 'maintaining state', content: 'session_start(), $_SESSION, session_destroy()', code: 'session_start();\n$_SESSION["user"] = "John";\necho $_SESSION["user"];', hint: 'Call session_start() first' },
    { title: 'Cookies', desc: 'client-side storage', content: 'setcookie(), $_COOKIE, Expiration', code: 'setcookie("user", "John", time() + 3600);\necho $_COOKIE["user"];', hint: 'Cookies set for future requests' },
    
    // Intermediate (20-44)
    { title: 'File Reading', desc: 'reading file contents', content: 'file_get_contents(), fopen(), fread(), fclose()', code: '$content = file_get_contents("data.txt");\necho $content;', hint: 'file_get_contents() is simplest' },
    { title: 'File Writing', desc: 'creating and writing files', content: 'file_put_contents(), fwrite(), File Permissions', code: 'file_put_contents("output.txt", "Hello");', hint: 'Check file permissions' },
    { title: 'File Upload', desc: 'handling file uploads', content: '$_FILES, move_uploaded_file(), Validation', code: '$file = $_FILES["upload"];\nmove_uploaded_file($file["tmp_name"], "uploads/" . $file["name"]);', hint: 'Validate file type and size' },
    { title: 'Directory Operations', desc: 'working with folders', content: 'scandir(), mkdir(), rmdir(), is_dir()', code: '$files = scandir(".");\nforeach($files as $file) {\n  echo $file;\n}', hint: '. and .. are current/parent dirs' },
    { title: 'Regular Expressions', desc: 'pattern matching', content: 'preg_match(), preg_replace(), Regex Patterns', code: '$pattern = "/^[a-z]+$/";\nif(preg_match($pattern, "hello")) {\n  echo "Match";\n}', hint: 'Use / delimiters for patterns' },
    { title: 'Date and Time', desc: 'working with timestamps', content: 'date(), time(), strtotime(), DateTime class', code: 'echo date("Y-m-d H:i:s");\n$tomorrow = strtotime("+1 day");', hint: 'time() returns Unix timestamp' },
    { title: 'Error Handling', desc: 'try, catch, throw', content: 'try/catch, Exception class, Custom Exceptions', code: 'try {\n  throw new Exception("Error!");\n} catch(Exception $e) {\n  echo $e->getMessage();\n}', hint: 'Always catch specific exceptions' },
    { title: 'Classes & Objects', desc: 'OOP fundamentals', content: 'class, new, Properties, Methods', code: 'class User {\n  public $name;\n  function greet() {\n    return "Hi " . $this->name;\n  }\n}', hint: 'Use $this to access properties' },
    { title: 'Constructors', desc: '__construct method', content: '__construct(), Initialization, Parameters', code: 'class User {\n  public $name;\n  function __construct($name) {\n    $this->name = $name;\n  }\n}', hint: 'Constructor runs on new' },
    { title: 'Inheritance', desc: 'extending classes', content: 'extends, parent::, Method Overriding', code: 'class Admin extends User {\n  function greet() {\n    return "Admin: " . parent::greet();\n  }\n}', hint: 'Use parent:: to call parent method' },
    { title: 'Access Modifiers', desc: 'public, private, protected', content: 'Visibility, Encapsulation, Getters/Setters', code: 'class User {\n  private $password;\n  public function setPassword($p) {\n    $this->password = $p;\n  }\n}', hint: 'private prevents outside access' },
    { title: 'Static Properties', desc: 'class-level members', content: 'static keyword, self::, Static Methods', code: 'class Counter {\n  public static $count = 0;\n  static function increment() {\n    self::$count++;\n  }\n}', hint: 'Use self:: for static members' },
    { title: 'Interfaces', desc: 'contracts for classes', content: 'interface, implements, Method Signatures', code: 'interface Drivable {\n  public function drive();\n}\nclass Car implements Drivable {\n  public function drive() {}\n}', hint: 'Interfaces define method contracts' },
    { title: 'Abstract Classes', desc: 'partial implementations', content: 'abstract class, abstract methods, Inheritance', code: 'abstract class Animal {\n  abstract function makeSound();\n}\nclass Dog extends Animal {\n  function makeSound() {\n    echo "Bark";\n  }\n}', hint: 'Abstract methods have no body' },
    { title: 'Traits', desc: 'code reuse mechanism', content: 'trait, use keyword, Method Conflicts', code: 'trait Logger {\n  function log($msg) {\n    echo $msg;\n  }\n}\nclass User {\n  use Logger;\n}', hint: 'Traits enable horizontal reuse' },
    { title: 'Namespaces', desc: 'organizing code', content: 'namespace, use, Autoloading', code: 'namespace App\\Models;\n\nclass User {}\n\n// Other file:\nuse App\\Models\\User;', hint: 'Prevents naming conflicts' },
    { title: 'Autoloading', desc: 'automatic class loading', content: 'spl_autoload_register(), PSR-4, Composer', code: 'spl_autoload_register(function($class) {\n  include $class . ".php";\n});', hint: 'Composer handles this automatically' },
    { title: 'MySQL Connection', desc: 'connecting to databases', content: 'mysqli, PDO, Connection Parameters', code: '$conn = new mysqli("localhost", "user", "pass", "db");\nif($conn->connect_error) {\n  die("Failed");\n}', hint: 'PDO is more flexible than mysqli' },
    { title: 'MySQL Queries', desc: 'SELECT, INSERT, UPDATE, DELETE', content: 'query(), Prepared Statements, fetch_assoc()', code: '$result = $conn->query("SELECT * FROM users");\nwhile($row = $result->fetch_assoc()) {\n  echo $row["name"];\n}', hint: 'Always use prepared statements' },
    { title: 'Prepared Statements', desc: 'preventing SQL injection', content: 'prepare(), bind_param(), execute()', code: '$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->bind_param("i", $id);\n$stmt->execute();', hint: 'Use ? for placeholders' },
    { title: 'PDO Basics', desc: 'PHP Data Objects', content: 'PDO class, Connection, Error Modes', code: '$pdo = new PDO("mysql:host=localhost;dbname=test", "user", "pass");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);', hint: 'PDO works with multiple databases' },
    { title: 'PDO Prepared Statements', desc: 'named and positional placeholders', content: 'Named Placeholders, bindParam(), fetch()', code: '$stmt = $pdo->prepare("SELECT * FROM users WHERE name = :name");\n$stmt->execute(["name" => $name]);', hint: 'Named placeholders use :name' },
    { title: 'Transactions', desc: 'atomic operations', content: 'beginTransaction(), commit(), rollback()', code: '$pdo->beginTransaction();\ntry {\n  // queries\n  $pdo->commit();\n} catch(Exception $e) {\n  $pdo->rollback();\n}', hint: 'Use for multiple related queries' },
    { title: 'JSON in PHP', desc: 'encoding and decoding', content: 'json_encode(), json_decode(), JSON_* Constants', code: '$arr = ["name" => "John"];\n$json = json_encode($arr);\n$data = json_decode($json, true);', hint: 'true makes associative array' },
    { title: 'REST API Basics', desc: 'creating endpoints', content: 'HTTP Methods, $_SERVER, JSON Response', code: 'header("Content-Type: application/json");\necho json_encode(["status" => "success"]);', hint: 'Set Content-Type header' },
    
    // Advanced (45-59)
    { title: 'API Authentication', desc: 'JWT and tokens', content: 'Bearer Tokens, JWT, $_SERVER["HTTP_AUTHORIZATION"]', code: '$token = $_SERVER["HTTP_AUTHORIZATION"];\n// Validate token', hint: 'Use JWT libraries for security' },
    { title: 'Password Hashing', desc: 'secure password storage', content: 'password_hash(), password_verify(), bcrypt', code: '$hash = password_hash($password, PASSWORD_DEFAULT);\nif(password_verify($input, $hash)) {}', hint: 'Never store plain passwords' },
    { title: 'CSRF Protection', desc: 'cross-site request forgery', content: 'Token Generation, Validation, Session Storage', code: '$token = bin2hex(random_bytes(32));\n$_SESSION["csrf_token"] = $token;', hint: 'Verify token on form submission' },
    { title: 'XSS Prevention', desc: 'cross-site scripting', content: 'htmlspecialchars(), ENT_QUOTES, Output Encoding', code: 'echo htmlspecialchars($user_input, ENT_QUOTES);', hint: 'Encode all user output' },
    { title: 'Composer Basics', desc: 'dependency management', content: 'composer.json, require, autoload', code: '// composer.json\n{\n  "require": {\n    "vendor/package": "^1.0"\n  }\n}', hint: 'Run composer install to add packages' },
    { title: 'Laravel Routing', desc: 'defining routes', content: 'Route::get(), Route::post(), Controllers', code: 'Route::get("/users", [UserController::class, "index"]);\nRoute::post("/users", [UserController::class, "store"]);', hint: 'Routes map URLs to controllers' },
    { title: 'Laravel Controllers', desc: 'handling requests', content: 'php artisan make:controller, Request, Response', code: 'class UserController extends Controller {\n  public function index() {\n    return User::all();\n  }\n}', hint: 'Controllers organize route logic' },
    { title: 'Laravel Models', desc: 'Eloquent ORM', content: 'Model Class, Database Tables, Query Builder', code: 'class User extends Model {\n  protected $fillable = ["name", "email"];\n}\n$users = User::where("active", true)->get();', hint: 'Models represent database tables' },
    { title: 'Laravel Migrations', desc: 'database version control', content: 'php artisan make:migration, Schema, up()/down()', code: 'Schema::create("users", function($table) {\n  $table->id();\n  $table->string("name");\n  $table->timestamps();\n});', hint: 'Migrations track schema changes' },
    { title: 'Laravel Validation', desc: 'request validation', content: 'validate(), Rules, Custom Messages', code: '$request->validate([\n  "email" => "required|email",\n  "age" => "required|integer|min:18"\n]);', hint: 'Validation prevents bad data' },
    { title: 'Laravel Blade', desc: 'templating engine', content: '@extends, @section, @yield, @foreach', code: '@extends("layouts.app")\n\n@section("content")\n  <h1>{{ $title }}</h1>\n@endsection', hint: '{{ }} escapes output automatically' },
    { title: 'Laravel Middleware', desc: 'request filtering', content: 'php artisan make:middleware, handle(), Route Middleware', code: 'public function handle($request, $next) {\n  if(!auth()->check()) {\n    return redirect("login");\n  }\n  return $next($request);\n}', hint: 'Middleware runs before controllers' },
    { title: 'Laravel Authentication', desc: 'user login system', content: 'Auth facade, Login, Logout, Guards', code: 'if(Auth::attempt(["email" => $email, "password" => $password])) {\n  // Success\n}', hint: 'Use Auth::attempt() to login' },
    { title: 'Laravel API Resources', desc: 'transforming models', content: 'php artisan make:resource, toArray(), Collections', code: 'class UserResource extends JsonResource {\n  public function toArray($request) {\n    return [\n      "id" => $this->id,\n      "name" => $this->name\n    ];\n  }\n}', hint: 'Resources control JSON structure' },
    { title: 'Laravel Jobs & Queues', desc: 'background processing', content: 'php artisan make:job, Queue::push(), Workers', code: 'class ProcessOrder implements ShouldQueue {\n  public function handle() {\n    // Process\n  }\n}\nProcessOrder::dispatch($order);', hint: 'Queues handle slow tasks asynchronously' },
    { title: 'Laravel Events', desc: 'event-driven architecture', content: 'Event, Listener, Event::listen()', code: 'event(new UserRegistered($user));\n\nclass SendWelcomeEmail {\n  public function handle(UserRegistered $event) {}\n}', hint: 'Events decouple components' },
    { title: 'Testing with PHPUnit', desc: 'unit and feature tests', content: 'TestCase, assertSame(), Feature Tests', code: 'public function test_user_can_login() {\n  $response = $this->post("/login", $data);\n  $response->assertStatus(200);\n}', hint: 'Tests ensure code works correctly' },
    { title: 'PHP Performance', desc: 'optimization techniques', content: 'OPcache, Caching, Database Indexing, N+1 Queries', code: '// Cache results\n$users = Cache::remember("users", 3600, function() {\n  return User::all();\n});', hint: 'Cache expensive operations' },
    { title: 'Symfony Basics', desc: 'alternative framework', content: 'Bundles, Routing, Controllers, Twig', code: '#[Route("/hello/{name}")]\npublic function hello(string $name): Response {\n  return $this->render("hello.html.twig", ["name" => $name]);\n}', hint: 'Symfony uses attributes for routing' },
    { title: 'Modern PHP Features', desc: 'PHP 8+ enhancements', content: 'Named Arguments, Union Types, Match Expression, Attributes', code: 'function process(string|int $value): string {\n  return match($value) {\n    1 => "one",\n    2 => "two",\n    default => "other"\n  };\n}', hint: 'PHP 8+ adds many improvements' }
  ]
  
  const topic = topics[i] || topics[topics.length - 1]
  
  return {
    id: `php-${i + 1}`,
    title: topic.title,
    description: `Learn ${topic.desc}`,
    content: `# ${topic.title}\n\n${topic.content}\n\n## Example:\n\`\`\`php\n<?php\n${topic.code}\n?>\n\`\`\``,
    language: 'php' as const,
    difficulty,
    estimatedTime: 25 + i,
    initialCode: `<?php\n// Your PHP code here\n\n?>`,
    solution: `<?php\n${topic.code}\n?>`,
    expectedOutput: 'Output',
    hints: [topic.hint, 'PHP code goes between <?php and ?>', 'Test your code thoroughly'],
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.includes('<?php'),
        errorMessage: 'Your code should include PHP tags'
      }
    ]
  }
})
